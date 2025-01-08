import type {
  GrammaticalCase,
  GrammaticalPluralGender,
  GrammaticalSingularGender
} from './core-concepts.ts'

export interface DeclensionEnding {
  type: 'ending'
  ending: string
}

export interface DeclensionReferOtherCase {
  type: 'refer'
  refer: GrammaticalCase
}

export type Declension = DeclensionEnding | DeclensionReferOtherCase

export type Declensions = Record<GrammaticalCase, Declension[]>
export type SingularDeclensionMap = Record<GrammaticalSingularGender, Declensions>
export type PluralDeclensionMap = Record<GrammaticalPluralGender, Declensions>

export interface DeclensionMap {
  singular: SingularDeclensionMap
  plural: PluralDeclensionMap
}

export const nounDeclensionMap: DeclensionMap = {
  singular: {
    masculine: {
      nominative: [
        { type: 'ending', ending: '' },
        { type: 'ending', ending: 'o' }
      ],
      genitive: [
        { type: 'ending', ending: 'a' },
        { type: 'ending', ending: 'u' }
      ],
      dative: [
        { type: 'ending', ending: 'owi' },
        { type: 'ending', ending: 'u' }
      ],
      accusative: [
        { type: 'ending', ending: 'a' },
        { type: 'refer', refer: 'nominative' }
      ],
      instrumental: [
        { type: 'ending', ending: 'em' },
        { type: 'ending', ending: 'iem' }
      ],
      locative: [
        { type: 'ending', ending: '\'e' },
        { type: 'ending', ending: 'u' }
      ],
      vocative: [
        { type: 'ending', ending: 'e' },
        { type: 'ending', ending: 'u' }
      ],
    },
    feminine: {
      nominative: [
        { type: 'ending', ending: 'a' },
        { type: 'ending', ending: 'i' },
        { type: 'ending', ending: 'o' }
      ],
      genitive: [
        { type: 'ending', ending: 'y' },
        { type: 'ending', ending: 'i' }
      ],
      dative: [{ type: 'refer', refer: 'locative' }],
      accusative: [
        { type: 'ending', ending: 'ę' },
        { type: 'refer', refer: 'nominative' }
      ],
      instrumental: [{ type: 'ending', ending: 'ą' }],
      locative: [
        { type: 'ending', ending: '\'e' },
        { type: 'ending', ending: 'y' },
        { type: 'ending', ending: 'i' }
      ],
      vocative: [
        { type: 'ending', ending: 'o' },
        { type: 'ending', ending: 'u' },
        { type: 'refer', refer: 'nominative' },
        { type: 'ending', ending: 'i' },
        { type: 'ending', ending: 'y' }
      ],
    },
    neuter: {
      nominative: [
        { type: 'ending', ending: 'o' },
        { type: 'ending', ending: 'e' },
        { type: 'ending', ending: 'ę' },
        { type: 'ending', ending: 'um' }
      ],
      genitive: [
        { type: 'ending', ending: 'a' },
        { type: 'ending', ending: 'um' }
      ],
      dative: [
        { type: 'ending', ending: 'u' },
        { type: 'ending', ending: 'um' }
      ],
      accusative: [{ type: 'refer', refer: 'nominative' }],
      instrumental: [
        { type: 'ending', ending: 'em' },
        { type: 'ending', ending: 'iem' },
        { type: 'ending', ending: 'um' }
      ],
      locative: [
        { type: 'ending', ending: 'e' },
        { type: 'ending', ending: 'u' },
        { type: 'ending', ending: 'um' }
      ],
      vocative: [{ type: 'refer', refer: 'nominative' }],
    }
  },
  plural: {
    masculine: {
      nominative: [
        { type: 'ending', ending: 'y' },
        { type: 'ending', ending: 'i' },
        { type: 'ending', ending: 'owie' },
        { type: 'ending', ending: 'e' },
        { type: 'ending', ending: 'anie' },
      ],
      genitive: [{ type: 'refer', refer: 'accusative' }],
      dative: [{ type: 'ending', ending: 'om' }],
      accusative: [
        { type: 'ending', ending: 'ów' },
        { type: 'ending', ending: 'y' },
        { type: 'ending', ending: 'i' },
        { type: 'ending', ending: '-' },
      ],
      instrumental: [
        { type: 'ending', ending: 'ami' },
        { type: 'ending', ending: 'iami' },
        { type: 'ending', ending: 'mi' },
      ],
      locative: [{ type: 'ending', ending: 'ach' }],
      vocative: [{ type: 'refer', refer: 'nominative' }],
    },
    other: {
      nominative: [
        { type: 'ending', ending: 'y' },
        { type: 'ending', ending: 'i' },
        { type: 'ending', ending: 'e' },
        { type: 'ending', ending: 'a' },
      ],
      genitive: [
        { type: 'ending', ending: 'ów' },
        { type: 'ending', ending: 'y' },
        { type: 'ending', ending: 'i' },
        { type: 'ending', ending: '-' },
      ],
      dative: [{ type: 'ending', ending: 'om' }],
      accusative: [{ type: 'refer', refer: 'nominative' }],
      instrumental: [
        { type: 'ending', ending: 'ami' },
        { type: 'ending', ending: 'iami' },
        { type: 'ending', ending: 'mi' },
      ],
      locative: [
        { type: 'ending', ending: 'ach' },
        { type: 'ending', ending: 'ech' },
      ],
      vocative: [{ type: 'refer', refer: 'nominative' }],
    }
  }
}