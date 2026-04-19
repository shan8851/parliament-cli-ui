import { motion } from 'motion/react'
import { SectionHeading } from '@/components/sectionHeading.tsx'
import { TerminalWindow } from '@/components/terminalWindow.tsx'
import {
  SEARCH_BILLS_EXAMPLE,
  MEMBER_EXAMPLE,
  DIVISIONS_EXAMPLE,
  QUESTIONS_EXAMPLE,
} from '@/data/terminalExamples.ts'

const EXAMPLES = [
  { title: 'Search bills', lines: SEARCH_BILLS_EXAMPLE },
  { title: 'Look up a member', lines: MEMBER_EXAMPLE },
  { title: 'Division outcomes', lines: DIVISIONS_EXAMPLE },
  { title: 'Written questions', lines: QUESTIONS_EXAMPLE },
] as const

export const ExamplesSection = () => (
  <section className="py-24 px-6 section-reveal" id="examples">
    <div className="max-w-4xl mx-auto">
      <SectionHeading
        title="See it in action"
        subtitle="Real output from the CLI. Human-readable by default, JSON when piped or with --json."
      />

      <div className="space-y-8">
        {EXAMPLES.map((example, index) => (
          <motion.div
            key={example.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <p className="text-text-muted text-sm font-medium mb-3">
              {example.title}
            </p>
            <TerminalWindow lines={example.lines} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
