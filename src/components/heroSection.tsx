import { Github, Package } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { CopyButton } from '@/components/copyButton.tsx'
import { TerminalWindow } from '@/components/terminalWindow.tsx'
import { HERO_EXAMPLE } from '@/data/terminalExamples.ts'
import { useTypingAnimation } from '@/hooks/useTypingAnimation.ts'
import { buildInstallCommand } from '@/lib/npmPackage.ts'

type HeroSectionProps = {
  npmVersion: string | null
}

const AnimatedTerminal = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const animatedLines = useTypingAnimation({
    lines: HERO_EXAMPLE,
    enabled: isVisible,
    typingSpeed: 40,
    lineDelay: 100,
    startDelay: 800,
  })

  return (
    <div ref={ref}>
      <TerminalWindow
        title="parliament -- zsh"
        lines={animatedLines}
        className="shadow-[0_0_60px_var(--color-accent-glow)]"
      />
    </div>
  )
}

export const HeroSection = ({ npmVersion }: HeroSectionProps) => {
  const installCommand = buildInstallCommand(npmVersion)

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow)_0%,transparent_70%)] opacity-70" />
        <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,var(--color-copper-glow)_0%,transparent_70%)] opacity-40" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="parliament-grid"
              x="0"
              y="0"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="24" cy="24" r="1" fill="currentColor" opacity="0.04" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#parliament-grid)" className="text-text" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-0">
          {npmVersion && (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-border-bright text-accent bg-accent-glow mb-8 w-fit"
            >
              v{npmVersion} — now on npm
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl text-text leading-[1.05] mb-6"
          >
            UK Parliament
            <br />
            <span className="text-accent">in your terminal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg leading-relaxed mb-8 max-w-lg"
          >
            Track bills, votes, members, and written questions from official UK Parliament APIs.
            Clean JSON for agents, friendly text for humans, errors like an adult.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border-bright bg-terminal-bg font-mono text-sm mb-8 max-w-md"
          >
            <span className="text-terminal-prompt select-none">$</span>
            <code className="text-terminal-output flex-1">{installCommand}</code>
            <CopyButton text={installCommand} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="https://github.com/shan8851/parliament-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:brightness-110 transition-all duration-200"
            >
              <Github size={16} />
              View on GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/@shan8851/parliament-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-bright text-text-muted font-medium text-sm hover:border-accent hover:text-accent transition-all duration-200"
            >
              <Package size={16} />
              npm
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <AnimatedTerminal />
        </motion.div>
      </div>
    </section>
  )
}
