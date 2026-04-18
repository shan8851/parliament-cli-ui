const commands = [
  {
    command: 'parliament bill "renters rights"',
    description: 'Resolve one bill with ambiguity handling and stage metadata.',
  },
  {
    command: 'parliament search bills budget --take 5',
    description: 'Fast title search with stable pagination envelope.',
  },
  {
    command: 'parliament member "Keir Starmer"',
    description: 'Resolve members by name or id with party and house context.',
  },
  {
    command: 'parliament divisions budget',
    description: 'Search Commons division outcomes and vote totals.',
  },
  {
    command: 'parliament questions transport --take 2',
    description: 'Pull written questions and UINs from official questions API.',
  },
]

const terminalSample = String.raw`$ parliament bill 3973 --json
{
  "ok": true,
  "schemaVersion": "1",
  "command": "bill",
  "data": {
    "resolved": { "billId": 3973 },
    "bill": {
      "shortTitle": "A34 Slip Road Safety (East Ilsley and Beedon) Bill",
      "currentStage": "2nd reading"
    }
  }
}`

export const App = () => (
  <div className="site-shell">
    <div className="backdrop" aria-hidden="true" />

    <header className="topbar">
      <span className="brand-mark" aria-hidden="true">🏛️</span>
      <span className="brand-name">parliament-cli</span>
      <nav className="top-links">
        <a href="https://github.com/shan8851/parliament-cli" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.npmjs.com/package/@shan8851/parliament-cli" target="_blank" rel="noreferrer">npm</a>
        <a href="https://parliament-cli-ui.vercel.app" target="_blank" rel="noreferrer">Live</a>
      </nav>
    </header>

    <main>
      <section className="hero card">
        <p className="eyebrow">Official UK Parliament APIs, one terminal interface</p>
        <h1>Track bills, votes, members, and written questions before your coffee goes cold.</h1>
        <p className="lead">
          <code>parliament</code> is a focused CLI for real parliamentary data. It speaks clean JSON for agents,
          friendly text for humans, and errors like an adult.
        </p>

        <div className="hero-cta-row">
          <code className="install-line">npm i -g @shan8851/parliament-cli</code>
          <div className="hero-cta-links">
            <a href="https://github.com/shan8851/parliament-cli" target="_blank" rel="noreferrer">CLI repo</a>
            <a href="https://github.com/shan8851/parliament-cli-ui" target="_blank" rel="noreferrer">UI repo</a>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Day-one useful commands</h2>
        <ul className="command-list">
          {commands.map((item) => (
            <li key={item.command} className="command-item">
              <code>{item.command}</code>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid-two">
        <article className="card">
          <h2>Agent-friendly by design</h2>
          <ul className="bullet-list">
            <li>Stable envelope with <code>ok</code>, <code>schemaVersion</code>, <code>command</code>, and <code>requestedAt</code>.</li>
            <li>Text in TTY, JSON when piped. No flag dance needed.</li>
            <li>Structured errors with explicit retryability.</li>
            <li>Ambiguous query detection with candidate hints.</li>
          </ul>
        </article>

        <article className="card">
          <h2>Install + run</h2>
          <pre className="terminal"><code>{`npm i -g @shan8851/parliament-cli
parliament search bills "energy"
parliament divisions budget
parliament member "Keir Starmer"`}</code></pre>
          <p className="small-note">Works with OpenClaw, Claude Desktop MCP, and any shell-capable agent stack.</p>
        </article>
      </section>

      <section className="card">
        <h2>Example output</h2>
        <pre className="terminal"><code>{terminalSample}</code></pre>
      </section>

      <section className="card links-card">
        <h2>Links</h2>
        <div className="link-grid">
          <a href="https://developer.parliament.uk/" target="_blank" rel="noreferrer">UK Parliament developer hub</a>
          <a href="https://bills-api.parliament.uk/" target="_blank" rel="noreferrer">Bills API</a>
          <a href="https://members-api.parliament.uk/" target="_blank" rel="noreferrer">Members API</a>
          <a href="https://questions-statements-api.parliament.uk/" target="_blank" rel="noreferrer">Written Questions API</a>
          <a href="https://commonsvotes-api.parliament.uk/" target="_blank" rel="noreferrer">Commons Votes API</a>
        </div>
      </section>
    </main>

    <footer>
      Built by <a href="https://github.com/shan8851" target="_blank" rel="noreferrer">@shan8851</a>. MIT licensed.
    </footer>
  </div>
)
