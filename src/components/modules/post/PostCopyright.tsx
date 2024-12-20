'use client'

import dayjs from 'dayjs'
import type { FC } from 'react'

import { Divider } from '~/components/ui/divider'
import { toast } from '~/lib/toast'
import { useCurrentPostDataSelector } from '~/providers/post/CurrentPostDataProvider'
import { useAggregationSelector } from '~/providers/root/aggregation-data-provider'

export const PostCopyright: FC = () => {
  const name = useAggregationSelector((data) => data.user.name)

  const webUrl = useAggregationSelector((data) => data.url.webUrl)
  const data = useCurrentPostDataSelector(
    (data) => {
      if (!webUrl) return null
      if (!data) return null
      return {
        title: data.title,
        link: `${webUrl}/posts/${data.category.slug}/${data.slug}`,
        date: data.modified,
        created: data.created,
      }
    },
    [webUrl],
  )
  if (!data) return null
  const { title, link, date, created } = data
  return (
    <section
      className="mt-4 text-sm leading-loose text-gray-600 dark:text-neutral-400"
      id="copyright"
    >
      <p>文章标题：{title}</p>
      <p>文章作者：{name}</p>
      <p>
        文章链接：<span>{link}</span>{' '}
        <a
          onClick={() => {
            navigator.clipboard.writeText(link)
            toast.success('已复制文章链接')
          }}
          data-hide-print
          className="cursor-pointer select-none"
        >
          [复制]
        </a>
      </p>
      <p>
        最后修改时间:{' '}
        {date ? dayjs(date).format('YYYY 年 MM 月 DD 日 H:mm') : '暂没有修改过'}
      </p>
      <Divider />
      <div>
        <div className="float-right ml-4">
          <img src="/files/Do1e.svg" alt="Do1e" />
        </div>
        <p>
          商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，您可以自由地在任何媒体以任何形式复制和分发作品，也可以修改和创作，但是分发衍生作品时必须采用相同的许可协议。
          <br />
          本文采用
          <a
            className="shiro-link--underline"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            CC BY-NC-SA 4.0 - 非商业性使用 - 相同方式共享 4.0 国际
          </a>
          进行许可。
        </p>
        <p>
          文中所有代码均使用
          <a
            className="shiro-link--underline"
            href="https://opensource.org/license/mit"
          >
            MIT License
          </a>
          进行许可。欢迎使用但请在代码中保留原作者信息和许可协议，点击
          <a
            onClick={() => {
              navigator.clipboard.writeText(
                `This code is copied from ${
                  link
                } and is licensed under MIT License:\n\nMIT License\n\nCopyright (c) ${created.slice(
                  0,
                  4,
                )} ${
                  name
                }\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.`,
              )
              toast.success('已复制License信息到剪贴板')
            }}
            data-hide-print
            className="cursor-pointer select-none"
          >
            [复制]
          </a>
          。
        </p>
      </div>
    </section>
  )
}
