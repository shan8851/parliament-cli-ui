import { CopyButton } from '@/components/copyButton.tsx'
import { SectionHeading } from '@/components/sectionHeading.tsx'
import { buildInstallCommand } from '@/lib/npmPackage.ts'

type InstallSectionProps = {
  npmVersion: string | null
}

export const InstallSection = ({ npmVersion }: InstallSectionProps) => {
  const installCommand = buildInstallCommand(npmVersion)

  return (
    <section className="py-24 px-6 section-reveal" id="install">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Get started"
          subtitle="Install globally and query parliamentary data in seconds."
        />

        <div className="space-y-4">
          <div>
            <p className="text-text-muted text-sm mb-2 font-medium">
              {npmVersion ? `npm (v${npmVersion})` : 'npm'}
            </p>
            <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-border-bright bg-surface font-mono text-sm shadow-[0_0_20px_var(--color-accent-glow)]">
              <code className="text-terminal-output overflow-x-auto whitespace-nowrap">{installCommand}</code>
              <CopyButton text={installCommand} />
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-text-muted text-sm font-medium">Quick examples</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'parliament search bills "energy"',
              'parliament member "Keir Starmer"',
              'parliament divisions budget',
              'parliament questions transport',
            ].map((cmd) => (
              <div
                key={cmd}
                className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg border border-border bg-surface font-mono text-sm"
              >
                <code className="text-text-dim text-xs overflow-x-auto whitespace-nowrap">{cmd}</code>
                <CopyButton text={cmd} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
