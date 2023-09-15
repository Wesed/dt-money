import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  return (
    <form className="flex gap-4">
      <input
        type="text"
        className="flex-1 rounded-md border border-transparent bg-gray_900 p-4 text-gray_300 placeholder:text-gray_500"
        placeholder="Busque por transações"
      />
      <button className="flex items-center gap-3 rounded-md border border-green_300 bg-transparent p-3 px-8 font-bold text-green_300 hover:border-green_500 hover:bg-green_500 hover:text-white hover:transition hover:duration-200">
        <MagnifyingGlass className="h-5 w-5" />
        Buscar
      </button>
    </form>
  )
}
