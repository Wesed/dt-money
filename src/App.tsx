import { TransactionsContextProvider } from './contexts/transactionsContext'
import './index.css'
import { Transactions } from './pages/Transactions'

export function App() {
  return (
    <TransactionsContextProvider>
      <Transactions />
    </TransactionsContextProvider>
  )
}
