import type { ReactNode } from 'react'
import { createElement as h } from 'react'

import {
  FaSolidCircle,
  FaSolidComments,
  FaSolidDotCircle,
  FaSolidFeatherAlt,
  FaSolidHistory,
  IcTwotoneSignpost,
  IonBook,
  MdiLightbulbOn20,
} from '~/components/icons/menu-collection'

export interface IHeaderMenu {
  title: string
  path: string
  type?: string
  icon?: ReactNode
  subMenu?: Omit<IHeaderMenu, 'exclude'>[]
  exclude?: string[]
}
export const headerMenuConfig: IHeaderMenu[] = [
  {
    title: '首页',
    path: '/',
    type: 'Home',
    icon: h(FaSolidDotCircle),
    subMenu: [],
  },
  {
    title: '文稿',
    path: '/posts',
    type: 'Post',
    subMenu: [],
    icon: h(IcTwotoneSignpost),
  },
  {
    title: '手记',
    type: 'Note',
    path: '/notes',
    icon: h(FaSolidFeatherAlt),
    exclude: ['/notes/topics'],
  },

  {
    title: '时光',
    icon: h(FaSolidHistory),
    path: '/timeline',
    subMenu: [
      {
        title: '手记',
        icon: h(FaSolidFeatherAlt),
        path: '/timeline?type=note',
      },
      {
        title: '文稿',
        icon: h(IonBook),
        path: '/timeline?type=post',
      },
      {
        title: '回忆',
        icon: h(FaSolidCircle),
        path: '/timeline?memory=1',
      },
      {
        title: '专栏',
        path: '/notes/topics',
        icon: h('i', {
          className: 'i-mingcute-align-bottom-fill flex center',
        }),
      },
    ],
  },
  {
    title: '随笔',
    icon: h(MdiLightbulbOn20),
    path: '/thinking',
  },
  {
    title: '一言',
    path: '/says',
    icon: h(FaSolidComments),
  },
]
