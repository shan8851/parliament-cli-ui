import { CopyButton } from '@/components/copyButton.tsx'

export const SkillSection = () => (
  <section className="py-24 px-6 section-reveal">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-heading text-3xl md:text-4xl text-text tracking-tight mb-3">
          🦞 Agent Skill
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Install the skill so your agent knows every command. Works with
          OpenClaw, or grab it from the skills collection for any agent framework.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="rounded-lg border border-border bg-surface p-6 text-left">
          <h3 className="text-text font-mono font-semibold text-sm mb-3">
            ClawHub
          </h3>
          <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-md border border-border bg-bg font-mono text-sm">
            <code className="text-text-dim text-xs">clawhub install parliament-cli</code>
            <CopyButton text="clawhub install parliament-cli" />
          </div>
          <p className="text-text-dim text-xs mt-3">
            For{' '}
            <a
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent underline"
            >
              OpenClaw
            </a>{' '}
            users
          </p>
          <a
            href="https://clawhub.ai/shan8851/parliament-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs text-text-muted hover:text-accent transition-colors"
          >
            View on ClawHub →
          </a>
        </div>

        <div className="rounded-lg border border-border bg-surface p-6 text-left">
          <h3 className="text-text font-mono font-semibold text-sm mb-3">
            Skills Collection
          </h3>
          <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-md border border-border bg-bg font-mono text-sm">
            <code className="text-text-dim text-xs">npx skills add shan8851/agent-skills --skill parliament-cli</code>
            <CopyButton text="npx skills add shan8851/agent-skills --skill parliament-cli -g -y" />
          </div>
          <p className="text-text-dim text-xs mt-3">For any agent framework</p>
          <a
            href="https://skills.shan8851.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs text-text-muted hover:text-accent transition-colors"
          >
            Browse all skills →
          </a>
        </div>
      </div>
    </div>
  </section>
)
