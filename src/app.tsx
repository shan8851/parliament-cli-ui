import { AgentSection } from '@/components/agentSection.tsx'
import { ExamplesSection } from '@/components/examplesSection.tsx'
import { FeaturesSection } from '@/components/featuresSection.tsx'
import { Footer } from '@/components/footer.tsx'
import { Header } from '@/components/header.tsx'
import { HeroSection } from '@/components/heroSection.tsx'
import { InstallSection } from '@/components/installSection.tsx'
import { SkillSection } from '@/components/skillSection.tsx'
import { useNpmVersion } from '@/hooks/useNpmVersion.ts'

export const App = () => {
  const npmVersion = useNpmVersion()

  return (
    <>
      <Header />
      <main>
        <HeroSection npmVersion={npmVersion} />
        <InstallSection npmVersion={npmVersion} />
        <FeaturesSection />
        <ExamplesSection />
        <AgentSection />
        <SkillSection />
      </main>
      <Footer />
    </>
  )
}
