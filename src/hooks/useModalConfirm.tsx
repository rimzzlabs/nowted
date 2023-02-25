import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'

type ModalConfirm = {
  title: string
  description: string
  onConfirm: () => void
  confirmBtnStyle?: string
}

const AtomData = atom<ModalConfirm | null>(null)
const AtomModalOpen = atom(false)

export const useModalConfirm = () => {
  const [data, setData] = useAtom(AtomData)
  const [open, setOpen] = useAtom(AtomModalOpen)

  const openModal = (payload: ModalConfirm) => {
    return <T,>(e: React.MouseEvent<T>) => {
      e.stopPropagation()
      e.preventDefault()
      setOpen(true)
      setData(payload)
    }
  }
  const closeModal = () => {
    setOpen(false)
  }

  const onConfirm = () => {
    if (data) {
      data.onConfirm()
      closeModal()
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!open) {
        setData(null)
      }
    }, 500)
    return () => clearTimeout(timeoutId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return { open, data, closeModal, openModal, onConfirm }
}
