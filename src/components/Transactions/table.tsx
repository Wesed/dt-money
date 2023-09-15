import { NewRelease } from './newRelease'

export function TableTransactions() {
  return (
    <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2">
      <tbody>
        <NewRelease
          description="Desenvolvimento de site"
          value={12000}
          tag="Venda"
          date="13/04/2022"
          type="income"
        />

        <NewRelease
          description="Hamburguer"
          value={59}
          tag="Alimentação"
          date="10/04/2022"
        />

        <NewRelease
          description="Aluguel do apartamento"
          value={1200}
          tag="Casa"
          date="27/03/2022"
        />

        <NewRelease
          description="Computador"
          value={5400}
          tag="Venda"
          date="15/03/2022"
          type="income"
        />

        <NewRelease
          description="Desenvolvimento de site"
          value={12000}
          tag="Venda"
          date="13/04/2022"
          type="income"
        />

        <NewRelease
          description="Hamburguer"
          value={59}
          tag="Alimentação"
          date="10/04/2022"
        />

        <NewRelease
          description="Aluguel do apartamento"
          value={1200}
          tag="Casa"
          date="27/03/2022"
        />

        <NewRelease
          description="Computador"
          value={5400}
          tag="Venda"
          date="15/03/2022"
          type="income"
        />
      </tbody>
    </table>
  )
}
