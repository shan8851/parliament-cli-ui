import { useEffect, useState } from 'react'
import {
  npmRegistryLatestPackageUrl,
  parseNpmPackageVersion,
} from '@/lib/npmPackage.ts'

export const useNpmVersion = (): string | null => {
  const [npmVersion, setNpmVersion] = useState<string | null>(null)

  useEffect(() => {
    const abortController = new AbortController()

    const fetchVersion = async (): Promise<void> => {
      try {
        const response = await fetch(npmRegistryLatestPackageUrl, {
          signal: abortController.signal,
        })

        if (!response.ok) return

        const packageMetadata: unknown = await response.json()
        const resolvedVersion = parseNpmPackageVersion(packageMetadata)

        if (resolvedVersion !== null) {
          setNpmVersion(resolvedVersion)
        }
      } catch {
        // silently fail -- badge just won't show
      }
    }

    void fetchVersion()

    return () => abortController.abort()
  }, [])

  return npmVersion
}
