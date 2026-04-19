import { AlertTriangle, Braces, Cpu } from 'lucide-react'
import { SectionHeading } from '@/components/sectionHeading.tsx'
import { TerminalWindow } from '@/components/terminalWindow.tsx'
import { AGENT_JSON_EXAMPLE } from '@/data/terminalExamples.ts'

const AGENT_FEATURES = [
  {
    icon: Braces,
    title: 'Stable JSON envelope',
    description:
      'Consistent ok, schemaVersion, command, requestedAt, and data across every command',
  },
  {
    icon: AlertTriangle,
    title: 'Structured errors',
    description:
      'Explicit error codes, retryability flags, and candidate hints for ambiguous queries',
  },
  {
    icon: Cpu,
    title: 'Agent-friendly output',
    description:
      'Text in a TTY, JSON when piped. Handy for OpenClaw, MCP clients, and shell-capable agents',
  },
] as const

export const AgentSection = () => (
  <section className="py-24 px-6 section-reveal">
    <div className="max-w-5xl mx-auto">
      <div className="rounded-xl border border-accent/20 bg-accent-glow/40 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading title="Built for AI agents" />
            <p className="text-text-muted text-lg leading-relaxed mb-6 max-w-xl">
              Every command returns a stable JSON envelope when piped or invoked with{' '}
              <code className="text-accent font-mono text-sm px-1.5 py-0.5 rounded bg-bg/80">
                --json
              </code>
              . Ambiguous lookups return candidate hints so agents can recover instead of shrugging.
            </p>

            <div className="space-y-4">
              {AGENT_FEATURES.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-bg/70 text-accent shrink-0">
                    <feature.icon size={16} />
                  </div>
                  <div>
                    <h4 className="text-text font-medium text-sm">{feature.title}</h4>
                    <p className="text-text-muted text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <TerminalWindow
              title="parliament -- json output"
              lines={AGENT_JSON_EXAMPLE}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)
