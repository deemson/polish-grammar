export const grammaticalCases = [
  'nominative',
  'genitive',
  'dative',
  'accusative',
  'instrumental',
  'locative',
  'vocative'
] as const

export type GrammaticalCase = typeof grammaticalCases[number]

export const grammaticalNumbers = [
  'singular',
  'plural'
] as const

export type GrammaticalNumber = typeof grammaticalNumbers[number]

export const grammaticalSingularGenders = [
  'masculine',
  'feminine',
  'neuter'
] as const

export type GrammaticalSingularGender = typeof grammaticalSingularGenders[number]

export const grammaticalPluralGenders = [
  'masculine',
  'other'
] as const

export type GrammaticalPluralGender = typeof grammaticalPluralGenders[number]
export type GrammaticalGender = GrammaticalSingularGender | GrammaticalPluralGender