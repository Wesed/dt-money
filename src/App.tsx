import { TransactionContextProvider } from './contexts/transactionContext'
import './index.css'
import { Transactions } from './pages/Transactions'

export function App() {
  return (
    <TransactionContextProvider>
      <Transactions />
    </TransactionContextProvider>
  )
}
