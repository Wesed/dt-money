import * as Dialog from '@radix-ui/react-dialog'
import logo from '../../../../assets/logo.svg'
import { NewTransactionModal } from './newTransactionModal'
import { useState } from 'react'

export function Header() {
  const [openModal, setOpenModal] = useState(false)

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <header className="bg-gray_900 pb-30 pr-0 pt-10">
      <div className="mx-auto my-0 flex w-full max-w-maxWidth justify-between px-6 py-0">
        <img src={logo} alt="" />

        <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
          <Dialog.Trigger className="h-12 cursor-pointer rounded-md border-0 bg-green_500 px-4 py-0 font-bold text-gray-100 hover:bg-green_700 hover:transition hover:duration-200">
            Nova transação
          </Dialog.Trigger>
          <NewTransactionModal closeModal={handleCloseModal} />
        </Dialog.Root>
      </div>
    </header>
  )
}
