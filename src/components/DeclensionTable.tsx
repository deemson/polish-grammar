import React, { type ReactNode } from 'react'
import { Table } from 'react-bootstrap'
import {
  grammaticalSingularGenders,
  grammaticalPluralGenders,
  grammaticalCases
} from '../code/core-concepts.ts'
import {
  grammaticalCaseShortTitles,
  grammaticalCaseTitles,
  grammaticalNumberTitles,
  grammaticalPluralGenderTitles,
  grammaticalSingularGenderTitles
} from '../code/core-concepts-display.ts'
import type { Declension, DeclensionMap } from '../code/declension.ts'

interface DeclensionTableBodyProps {
  declensionMap: DeclensionMap
}

interface Children {
  children: string
}

type DeclensionTableProps = DeclensionTableBodyProps & Children

export const DeclensionTable: React.FunctionComponent<DeclensionTableProps> = ({ declensionMap, children }) => {
  console.log(children)
  return <React.Fragment>
    <Table bordered>
      <DeclensionTableHead/>
      <DeclensionTableBody declensionMap={declensionMap}/>
    </Table>
    {JSON.parse(children)['one']}
  </React.Fragment>
}

const DeclensionTableHead: React.FunctionComponent = () => {
  return <thead>
  <tr>
    <th></th>
    <th className="table-primary" colSpan={3}>{grammaticalNumberTitles['singular']}</th>
    <th className="table-primary" colSpan={2}>{grammaticalNumberTitles['plural']}</th>
  </tr>
  <tr className="table-secondary">
    <th>Case</th>
    {grammaticalSingularGenders.map(gender => {
      return <th key={`singular-${gender}`}>{grammaticalSingularGenderTitles[gender]}</th>
    })}
    {grammaticalPluralGenders.map(gender => {
      return <th key={`plural-${gender}`}>{grammaticalPluralGenderTitles[gender]}</th>
    })}
  </tr>
  </thead>
}

const DeclensionTableBody: React.FunctionComponent<DeclensionTableBodyProps> = ({ declensionMap }) => {
  return <tbody>
  {grammaticalCases.map(grammaticalCase => {
    return <tr key={grammaticalCase}>
      <td>{grammaticalCaseTitles[grammaticalCase]}</td>
      {grammaticalSingularGenders.map(gender => {
        const declensions = declensionMap.singular[gender][grammaticalCase]
        return <DeclensionTableCell key={`singular-${gender}-${grammaticalCase}`} declensions={declensions}/>
      })}
      {grammaticalPluralGenders.map(gender => {
        const declensions = declensionMap.plural[gender][grammaticalCase]
        return <DeclensionTableCell key={`singular-${gender}-${grammaticalCase}`} declensions={declensions}/>
      })}
    </tr>
  })}
  </tbody>
}

interface DeclensionTableCellProps {
  declensions: Declension[]
}

const DeclensionTableCell: React.FunctionComponent<DeclensionTableCellProps> = ({ declensions }) => {
  const content = declensions.map(declension => {
    if (declension.type === 'ending') {
      return `-${declension.ending}`
    }
    if (declension.type === 'refer') {
      return `=${grammaticalCaseShortTitles[declension.refer]}`
    }
    return '?'
  }).join(' / ')
  return <td>{content}</td>
}