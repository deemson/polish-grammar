import type { GrammaticalCase } from './core-concepts.ts'

export const grammaticalCaseTitles: Record<GrammaticalCase, string> = {
  nominative: 'Nominative',
  genitive: 'Genitive',
  dative: 'Dative',
  accusative: 'Accusative',
  instrumental: 'Instrumental',
  locative: 'Locative',
  vocative: 'Vocative'
}

export const grammaticalCaseShortTitles: Record<GrammaticalCase, string> = {
  nominative: 'Nom',
  genitive: 'Gen',
  dative: 'Dat',
  accusative: 'Acc',
  instrumental: 'Instr',
  locative: 'Loc',
  vocative: 'Voc'
}