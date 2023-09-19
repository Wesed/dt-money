import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { SearchForm } from './components/TransactionsContainer/searchForm'
import { TableTransactions } from './components/TransactionsContainer/table'

export function Transactions() {
  return (
    <div className=" min-h-screen bg-gray_800 text-gray_100">
      <Header />
      <Summary />

      <div className="mx-auto my-20 flex max-w-maxWidth flex-col gap-6 p-6">
        <SearchForm />
        <TableTransactions />
      </div>
    </div>
  )
}
