import type { TerminalLine } from '@/data/terminalExamples.ts'
import { CopyButton } from '@/components/copyButton.tsx'

type TerminalWindowProps = {
  readonly title?: string
  readonly lines: ReadonlyArray<TerminalLine>
  readonly className?: string
}

const TerminalLineRenderer = ({ line }: { readonly line: TerminalLine }) => {
  if (line.type === 'blank') {
    return <div className="h-5" />
  }

  if (line.type === 'prompt') {
    return (
      <div className="flex">
        <span className="text-terminal-prompt select-none mr-2">$</span>
        <span className="text-text whitespace-pre">{line.text}</span>
      </div>
    )
  }

  if (line.type === 'header') {
    return (
      <div className="text-accent font-semibold text-base">{line.text}</div>
    )
  }

  return (
    <div
      className="text-terminal-output whitespace-pre"
      style={line.color ? { color: line.color } : undefined}
    >
      {line.text}
    </div>
  )
}

export const TerminalWindow = ({
  title = 'terminal',
  lines,
  className = '',
}: TerminalWindowProps) => {
  const commandText = lines
    .filter((l) => l.type === 'prompt')
    .map((l) => l.text)
    .join('\n')

  return (
    <div
      className={`rounded-lg border border-border overflow-hidden bg-terminal-bg ${className}`}
    >
      <div className="flex items-center justify-between px-4 py-2.5 bg-surface border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-text-dim text-xs font-mono ml-2">
            {title}
          </span>
        </div>
        {commandText && <CopyButton text={commandText} />}
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
        {lines.map((line, index) => (
          <TerminalLineRenderer key={index} line={line} />
        ))}
      </div>
    </div>
  )
}
