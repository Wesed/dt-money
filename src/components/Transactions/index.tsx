import { SearchForm } from './searchForm'
import { TableTransactions } from './table'

export function Transactions() {
  return (
    <div className="mx-auto my-16 flex max-w-maxWidth flex-col gap-6 p-6">
      <SearchForm />
      <TableTransactions />
    </div>
  )
}
