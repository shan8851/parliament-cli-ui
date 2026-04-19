import type { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
  readonly feature: {
    readonly name: string
    readonly command: string
    readonly description: string
    readonly icon: LucideIcon
    readonly accentColor: string
  }
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  const Icon = feature.icon

  return (
    <div className="group p-5 rounded-lg border border-border bg-surface hover:border-border-bright hover:bg-surface-hover transition-all duration-200 hover:-translate-y-0.5 h-full">
      <div className="flex items-start gap-3 mb-3">
        <div
          className="p-2 rounded-md shrink-0"
          style={{
            backgroundColor: `color-mix(in oklab, ${feature.accentColor} 12%, transparent)`,
            color: feature.accentColor,
          }}
        >
          <Icon size={18} />
        </div>
        <div>
          <h3 className="text-text font-medium text-sm">{feature.name}</h3>
          <p className="text-text-muted text-sm mt-1">{feature.description}</p>
        </div>
      </div>
      <code className="text-xs font-mono text-text-dim group-hover:text-accent transition-colors duration-200 break-all">
        {feature.command}
      </code>
    </div>
  )
}
