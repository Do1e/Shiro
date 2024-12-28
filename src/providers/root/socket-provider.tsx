'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { deleteActivityPresence } from '~/atoms/activity'
import { useSocketIsConnect, useSocketSessionId } from '~/atoms/hooks'
import { usePageIsActive } from '~/hooks/common/use-is-active'
import { useIsClient } from '~/hooks/common/use-is-client'
import { useCurrentNoteDataSelector } from '~/providers/note/CurrentNoteDataProvider'
import { useCurrentPageDataSelector } from '~/providers/page/CurrentPageDataProvider'
import { useCurrentPostDataSelector } from '~/providers/post/CurrentPostDataProvider'
import { SocketEmitEnum } from '~/types/events'

import { socketWorker } from '../../socket/worker-client'

export const useCurrentArticleId = () => {
  const noteId = useCurrentNoteDataSelector((data) => data?.data?.id)
  const postId = useCurrentPostDataSelector((data) => data?.id)
  const pageId = useCurrentPageDataSelector((data) => data?.id)
  return noteId || postId || pageId
}

if (typeof window !== 'undefined') {
  import('../../socket/worker-client')
}
export const SocketContainer = () => {
  return useIsClient() ? <SocketContainerImpl /> : null
}
const SocketContainerImpl: Component = () => {
  const connectOnce = useRef(false)
  const router = useRouter()
  useEffect(() => {
    if (connectOnce.current) return
    import('../../socket/worker-client').then(({ socketWorker }) => {
      socketWorker.setRouter(router)

      connectOnce.current = true
    })
  }, [])

  const webSocketSessionId = useSocketSessionId()
  const previousWebSocketSessionIdRef = useRef(webSocketSessionId)

  const socketIsConnected = useSocketIsConnect()
  const currentArticleId = useCurrentArticleId()
  const previousArticleIdRef = useRef<string | null>(null)

  useEffect(() => {
    const previousWebSocketSessionId = previousWebSocketSessionIdRef.current
    previousWebSocketSessionIdRef.current = webSocketSessionId
    if (!socketIsConnected) return

    socketWorker.emit(SocketEmitEnum.UpdateSid, {
      sessionId: webSocketSessionId,
    })

    ///

    deleteActivityPresence(previousWebSocketSessionId)
  }, [socketIsConnected, webSocketSessionId])

  useEffect(() => {
    if (!socketIsConnected) return

    const previousArticleId = previousArticleIdRef.current
    if (
      previousArticleId &&
      previousArticleId !== currentArticleId &&
      previousArticleId
    ) {
      socketWorker.emit(SocketEmitEnum.Leave, {
        roomName: `article-${previousArticleId}`,
      })
    }
    previousArticleIdRef.current = currentArticleId

    if (!currentArticleId) return

    socketWorker.emit(SocketEmitEnum.Join, {
      roomName: `article-${currentArticleId}`,
    })
  }, [socketIsConnected, currentArticleId])

  const pageIsActive = usePageIsActive()
  useEffect(() => {
    if (pageIsActive && !socketIsConnected) {
      socketWorker.reconnect()
    }
  }, [pageIsActive, socketIsConnected])

  return null
}
