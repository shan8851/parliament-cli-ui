import { motion } from 'motion/react'
import { SectionHeading } from '@/components/sectionHeading.tsx'
import { FeatureCard } from '@/components/featureCard.tsx'
import { COMMANDS } from '@/data/commands.ts'

export const FeaturesSection = () => (
  <section className="py-24 px-6 section-reveal" id="features">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        title="What you can query"
        subtitle="Bills, members, divisions, and written questions — with stable JSON output and batch-friendly patterns for agents."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {COMMANDS.map((command, index) => (
          <motion.div
            key={command.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <FeatureCard feature={command} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
