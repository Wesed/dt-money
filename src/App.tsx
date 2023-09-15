import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Transactions } from './components/Transactions'
import { SearchForm } from './components/Transactions/SearchForm'
import './index.css'

export function App() {
  return (
    <div className=" min-h-screen bg-gray_800 text-gray_100">
      <Header />
      <Summary />
      <Transactions />
    </div>
  )
}
