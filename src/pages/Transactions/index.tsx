import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { TransactionsContainer } from './components/TransactionsContainer'

export function Transactions() {
  return (
    <div className=" min-h-screen bg-gray_800 text-gray_100">
      <Header />
      <Summary />
      <TransactionsContainer />
    </div>
  )
}
