import React from 'react'
import { Table } from 'react-bootstrap'
import {
  type GrammaticalCase,
  grammaticalCases,
  grammaticalSingularGenders,
  grammaticalPluralGenders,
  type GrammaticalSingularGender, type GrammaticalPluralGender, type GrammaticalNumber
} from '../code/core-concepts.ts'

const casesWithoutVocative = grammaticalCases.filter(grCase => grCase !== 'vocative')

const caseTableCell = (grammaticalCase: GrammaticalCase, grammaticalNumber: GrammaticalNumber, gender: GrammaticalSingularGender | GrammaticalPluralGender, content: string) => {
  return <td key={`${grammaticalCase}-${grammaticalNumber}-${gender}`}>{content}</td>
}

const caseSingularTableCell = (grammaticalCase: GrammaticalCase, gender: GrammaticalSingularGender) => {
  const cell = (grammaticalCase: GrammaticalCase, gender: GrammaticalSingularGender, content: string) => {
    return caseTableCell(grammaticalCase, 'singular', gender, content)
  }
  switch (gender) {
    case 'masculine':
    case 'feminine':
    case 'neuter':
  }
  return <td>?</td>
}

const casePluralTableCell = (grammaticalCase: GrammaticalCase, gender: GrammaticalPluralGender) => {
  const cell = (grammaticalCase: GrammaticalCase, content: string) => {
    return caseTableCell(grammaticalCase, 'plural', gender, content)
  }
  switch (grammaticalCase) {
    case 'nominative':
      return cell('nominative', 'nom')
    case 'genitive':
      return cell('genitive', 'gen')
    default:
      return <td>?</td>
  }
}

export const NounDeclensionTable: React.FunctionComponent = () => {
  return <Table bordered>
    <thead>
    <tr>
      <th></th>
      <th className="table-primary" colSpan={3}>Singular</th>
      <th className="table-primary" colSpan={2}>Plural</th>
    </tr>
    <tr className="table-secondary">
      <th>Case</th>
      <th>Masculine</th>
      <th>Feminine</th>
      <th>Neuter</th>
      <th>Masculine</th>
      <th>Non Masculine</th>
    </tr>
    </thead>
    <tbody>
    {casesWithoutVocative.map(grammaticalCase => {
      return <tr key={grammaticalCase}>
        <td>{grammaticalCase}</td>
        {grammaticalSingularGenders.map(singularGender => {
          return caseSingularTableCell(grammaticalCase, singularGender)
        })}
        {grammaticalPluralGenders.map(pluralGender => {
          return casePluralTableCell(grammaticalCase, pluralGender)
        })}
      </tr>
    })}
    </tbody>
  </Table>
}