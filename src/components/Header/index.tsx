import logo from '../../../public/logo.svg'
export function Header() {
  return (
    <header className="bg-gray_900 pb-30 pr-0 pt-10">
      <div className="mx-auto my-0 flex w-full max-w-maxWidth justify-between px-6 py-0">
        <img src={logo} alt="" />
        <button className="hover:transition- h-12 cursor-pointer rounded-md border-0 bg-green_500 px-4 py-0 font-bold text-white hover:bg-green_700 hover:duration-200">
          Nova transação
        </button>
      </div>
    </header>
  )
}
