import { Copy, Check } from 'lucide-react'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard.ts'

type CopyButtonProps = {
  readonly text: string
  readonly className?: string
}

export const CopyButton = ({ text, className = '' }: CopyButtonProps) => {
  const { hasCopied, copy } = useCopyToClipboard()

  return (
    <button
      onClick={() => copy(text)}
      className={`cursor-pointer text-text-dim hover:text-accent transition-colors duration-200 ${className}`}
      aria-label="Copy to clipboard"
    >
      {hasCopied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  )
}
