export type TerminalLine = {
  readonly type: 'prompt' | 'output' | 'blank' | 'header'
  readonly text: string
  readonly color?: string
}

export const HERO_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: 'prompt', text: 'parliament search bills "renters"' },
  { type: 'blank', text: '' },
  { type: 'output', text: "Renters' Rights Bill                    3973   2nd reading", color: '#00b361' },
  { type: 'output', text: 'Renters (Reform) Bill                   2841   Royal Assent' },
  { type: 'output', text: 'Secure Tenancies (Reform) Bill          1203   Committee' },
]

export const SEARCH_BILLS_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: 'prompt', text: 'parliament search bills "energy" --take 3' },
  { type: 'blank', text: '' },
  { type: 'output', text: 'Great British Energy Bill               5172   Committee', color: '#00b361' },
  { type: 'output', text: 'Energy Prices Act 2022 (amendment)      4891   2nd reading' },
  { type: 'output', text: 'Energy Security and Net Zero            4302   1st reading' },
]

export const MEMBER_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: 'prompt', text: 'parliament member "Keir Starmer"' },
  { type: 'blank', text: '' },
  { type: 'header', text: 'Keir Starmer MP' },
  { type: 'blank', text: '' },
  { type: 'output', text: '  Party: Labour' },
  { type: 'output', text: '  Constituency: Holborn and St Pancras' },
  { type: 'output', text: '  House: Commons' },
  { type: 'output', text: '  MemberId: 4514' },
]

export const DIVISIONS_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: 'prompt', text: 'parliament divisions "budget"' },
  { type: 'blank', text: '' },
  { type: 'output', text: 'Division 1532 | Budget Resolution | Ayes: 356 | Noes: 241', color: '#00b361' },
  { type: 'output', text: 'Division 1528 | Spending Review   | Ayes: 348 | Noes: 253' },
  { type: 'output', text: 'Division 1521 | Fiscal Framework  | Ayes: 331 | Noes: 267' },
]

export const QUESTIONS_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: 'prompt', text: 'parliament questions transport --take 2' },
  { type: 'blank', text: '' },
  { type: 'output', text: 'UIN 902178 | Asked by: Sarah Olney', color: '#b86e4b' },
  { type: 'output', text: '  "To ask the Secretary of State for Transport..."' },
  { type: 'output', text: '  Answered: 2026-03-14' },
  { type: 'blank', text: '' },
  { type: 'output', text: 'UIN 902145 | Asked by: Iain Stewart', color: '#c9a84c' },
  { type: 'output', text: '  "To ask the Secretary of State for Transport..."' },
  { type: 'output', text: '  Answered: 2026-03-12' },
]

export const AGENT_JSON_EXAMPLE: ReadonlyArray<TerminalLine> = [
  { type: 'prompt', text: 'parliament bill 3973 --json' },
  { type: 'blank', text: '' },
  { type: 'output', text: '{' },
  { type: 'output', text: '  "ok": true,' },
  { type: 'output', text: '  "schemaVersion": "1",' },
  { type: 'output', text: '  "command": "bill",' },
  { type: 'output', text: '  "requestedAt": "2026-03-25T10:00:00.000Z",' },
  { type: 'output', text: '  "data": {' },
  { type: 'output', text: '    "resolved": { "billId": 3973 },' },
  { type: 'output', text: '    "bill": {' },
  { type: 'output', text: '      "shortTitle": "Renters\' Rights Bill",' },
  { type: 'output', text: '      "currentStage": "2nd reading"' },
  { type: 'output', text: '    }' },
  { type: 'output', text: '  }' },
  { type: 'output', text: '}' },
]
