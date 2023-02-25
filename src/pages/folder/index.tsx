import { FolderPlaceholder } from '@/components/Folder'
import { useTimeoutFn } from '@/hooks/useTimeoutFn'
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function FolderPage() {
  const [show, setShow] = useState(false)
  useTimeoutFn(() => setShow(true), 300)
  const { folderId } = useParams()

  if (!folderId) return null

  return (
    <Transition
      as={Fragment}
      show={show}
      enterFrom='opacity-0 scale-95'
      enter='ease-out duration-300'
      enterTo='opacity-100 scale-100'
    >
      <FolderPlaceholder />
    </Transition>
  )
}
