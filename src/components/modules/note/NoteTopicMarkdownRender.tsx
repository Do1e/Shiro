'use client'

import type { MarkdownToJSX } from 'markdown-to-jsx'
import Markdown, { RuleType } from 'markdown-to-jsx'
import type { FC } from 'react'

const mdOptions: MarkdownToJSX.Options = {
  allowedTypes: [
    RuleType.text,
    RuleType.paragraph,
    RuleType.codeInline,
    RuleType.link,
    RuleType.linkMailtoDetector,
    RuleType.linkBareUrlDetector,
    RuleType.linkAngleBraceStyleDetector,
    RuleType.textStrikethroughed,
    RuleType.textEmphasized,
    RuleType.textBolded,
    RuleType.textEscaped,
  ],
  forceBlock: true,
  wrapper: ({ children }) => <div className="leading-7">{children}</div>,
}

export const NoteTopicMarkdownRender: FC<{ children: string }> = (props) => (
  <Markdown options={mdOptions}>{props.children}</Markdown>
)
