import * as Dialog from '@radix-ui/react-dialog'
import { X, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black/75" />
      <Dialog.Content className="fixed left-2/4 top-2/4 min-w-[32rem] -translate-x-2/4 -translate-y-2/4  rounded-md bg-gray_800 px-12 py-10">
        <Dialog.Title>Nova transação</Dialog.Title>

        <Dialog.Close className="absolute right-6 top-6 cursor-pointer bg-transparent text-gray_500 hover:text-green_500 hover:transition hover:duration-200">
          <X size={24} />
        </Dialog.Close>

        <form className="mt-8 flex flex-col gap-4">
          <input
            type="text"
            className="input-modal"
            placeholder="Descrição"
            required
          />
          <input type="text" className="input-modal" placeholder="Descrição" />
          <input type="text" className="input-modal" placeholder="Descrição" />

          <div className="mt-2 flex gap-4">
            <button
              type="button"
              className="flex flex-1 justify-center gap-2 rounded-md bg-gray_700 p-4 text-gray_300 hover:bg-gray_900 hover:transition hover:duration-200"
            >
              <ArrowCircleUp size={24} className="text-green_500" />
              Entrada
            </button>

            <button
              type="button"
              className="flex flex-1 justify-center gap-2 rounded-md bg-gray_700 p-4 text-gray_300 hover:bg-gray_900 hover:transition hover:duration-200"
            >
              <ArrowCircleDown size={24} className="text-red_500" />
              Saída
            </button>
          </div>

          <button
            type="submit"
            className="mt-6 h-14 cursor-pointer rounded-md bg-green_500 px-5 py-0 font-bold text-white hover:bg-green_700"
          >
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
