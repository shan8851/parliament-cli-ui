import type { LucideIcon } from 'lucide-react'
import {
  ScrollText,
  Search,
  Users,
  Vote,
  MessageSquare,
  Binary,
  Rows3,
  ShieldCheck,
} from 'lucide-react'

type Command = {
  readonly name: string
  readonly command: string
  readonly description: string
  readonly icon: LucideIcon
  readonly accentColor: string
}

export const COMMANDS: ReadonlyArray<Command> = [
  {
    name: 'Bill Lookup',
    command: 'parliament bill "renters rights"',
    description:
      'Resolve a bill by title or ID with ambiguity handling and full stage metadata.',
    icon: ScrollText,
    accentColor: 'var(--color-accent)',
  },
  {
    name: 'Bill Search',
    command: 'parliament search bills budget --take 5',
    description:
      'Fast title search across all bills with stable pagination envelope.',
    icon: Search,
    accentColor: 'var(--color-copper)',
  },
  {
    name: 'Member Lookup',
    command: 'parliament member "Keir Starmer"',
    description:
      'Resolve members by name or ID with party, constituency, and house context.',
    icon: Users,
    accentColor: 'var(--color-accent)',
  },
  {
    name: 'Division Search',
    command: 'parliament divisions budget',
    description:
      'Search Commons division outcomes with vote totals and aye/noe breakdowns.',
    icon: Vote,
    accentColor: 'var(--color-copper)',
  },
  {
    name: 'Written Questions',
    command: 'parliament questions transport --take 2',
    description:
      'Pull written questions and UINs from the official questions API.',
    icon: MessageSquare,
    accentColor: 'var(--color-accent)',
  },
  {
    name: 'JSON Output',
    command: 'parliament bill 3973 --json',
    description:
      'Stable JSON envelope for agents. Text in TTY, JSON when piped. No flag dance.',
    icon: Binary,
    accentColor: 'var(--color-copper)',
  },
  {
    name: 'Batch Query',
    command: 'printf "starmer\\nreeves\\n" | parliament member --stdin',
    description:
      'Read newline-delimited member queries in one go with grouped results.',
    icon: Rows3,
    accentColor: 'var(--color-accent)',
  },
  {
    name: 'Structured Errors',
    command: 'parliament bill xyz --json',
    description:
      'Explicit error codes, retryability flags, and candidate hints for ambiguous queries.',
    icon: ShieldCheck,
    accentColor: 'var(--color-copper)',
  },
]
