import type {
  GrammaticalCase,
  GrammaticalNumber,
  GrammaticalPluralGender,
  GrammaticalSingularGender
} from './core-concepts.ts'

export const grammaticalNumberTitles: Record<GrammaticalNumber, string> = {
  singular: 'Singular',
  plural: 'Plural'
}

export const grammaticalNumberShortTitles: Record<GrammaticalNumber, string> = {
  singular: 'Sg',
  plural: 'Pl'
}

export const grammaticalSingularGenderTitles: Record<GrammaticalSingularGender, string> = {
  masculine: 'Masculine',
  feminine: 'Feminine',
  neuter: 'Neuter'
}

export const grammaticalPluralGenderTitles: Record<GrammaticalPluralGender, string> = {
  masculine: 'Masculine',
  other: 'Non Masculine',
}

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