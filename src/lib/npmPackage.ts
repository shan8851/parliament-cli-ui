export const npmPackageName = '@shan8851/parliament-cli'

export const npmRegistryLatestPackageUrl = `https://registry.npmjs.org/${encodeURIComponent(
  npmPackageName,
)}/latest`

const hasStringVersion = (value: unknown): value is { version: string } =>
  typeof value === 'object' &&
  value !== null &&
  'version' in value &&
  typeof value.version === 'string'

export const parseNpmPackageVersion = (value: unknown): string | null =>
  hasStringVersion(value) ? value.version : null

export const buildInstallCommand = (npmVersion: string | null): string =>
  npmVersion === null
    ? `npm i -g ${npmPackageName}`
    : `npm i -g ${npmPackageName}@${npmVersion}`
