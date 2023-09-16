import { TransactionsPage } from '@/pages/Transactions/components/Transactions'
import { Header } from './components/Header'
import { Summary } from './components/Summary'

export function Transactions() {
  return (
    <div className=" min-h-screen bg-gray_800 text-gray_100">
      <Header />
      <Summary />
      <TransactionsPage />
    </div>
  )
}
