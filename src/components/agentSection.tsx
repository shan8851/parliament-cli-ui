import { Braces, Cpu, AlertTriangle } from 'lucide-react'
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
      'Text in TTY, JSON when piped. Works with OpenClaw, Claude Desktop MCP, and any shell-capable agent',
  },
] as const

export const AgentSection = () => (
  <section className="py-24 px-6 section-reveal">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Built for AI agents" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            Every command returns a stable JSON envelope when piped or invoked with{' '}
            <code className="text-accent font-mono text-sm px-1.5 py-0.5 rounded bg-accent-glow">
              --json
            </code>
            , and ambiguous queries return candidate hints so agents can resolve without guesswork.
          </p>

          <div className="space-y-4">
            {AGENT_FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-accent-glow text-accent shrink-0">
                  <feature.icon size={16} />
                </div>
                <div>
                  <h4 className="text-text font-medium text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-text-muted text-sm">
                    {feature.description}
                  </p>
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
  </section>
)
