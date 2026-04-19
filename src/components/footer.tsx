import { Github, Package } from 'lucide-react'

export const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div>
        <span className="font-mono text-accent font-semibold text-sm">
          parliament-cli
        </span>
        <p className="text-text-dim text-sm mt-2">
          UK Parliament data in your terminal.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <a
          href="https://github.com/shan8851/parliament-cli"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
        >
          <Github size={14} />
          GitHub
        </a>
        <a
          href="https://www.npmjs.com/package/@shan8851/parliament-cli"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
        >
          <Package size={14} />
          npm
        </a>
        <a
          href="https://clawhub.ai/shan8851/parliament-cli"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
        >
          ClawHub
        </a>
        <span className="text-text-dim">MIT License</span>
      </div>

      <div className="text-sm">
        <p className="text-text-muted">
          Built by{' '}
          <a
            href="https://x.com/shan8851"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            @shan8851
          </a>
        </p>
        <p className="text-text-dim text-xs mt-3">
          Powered by UK Parliament official APIs.
        </p>
        <div className="flex flex-col gap-1 mt-3">
          <a
            href="https://developer.parliament.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim text-xs hover:text-text-muted transition-colors"
          >
            Parliament Developer Hub
          </a>
          <a
            href="https://bills-api.parliament.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim text-xs hover:text-text-muted transition-colors"
          >
            Bills API
          </a>
          <a
            href="https://members-api.parliament.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim text-xs hover:text-text-muted transition-colors"
          >
            Members API
          </a>
        </div>
      </div>
    </div>
  </footer>
)
