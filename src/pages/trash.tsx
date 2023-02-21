import { TrashedNote } from '@/components/Note'
import { useTimeoutFn } from '@/hooks/useTimeoutFn'
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function TrashPage() {
  const [show, setShow] = useState(false)
  useTimeoutFn(() => setShow(true), 300)

  return (
    <Transition
      as={Fragment}
      show={show}
      enterFrom='opacity-0 scale-95'
      enter='ease-out duration-300'
      enterTo='opacity-100 scale-100'
    >
      <div className='flex'>
        <TrashedNote type='favorites' />
      </div>
    </Transition>
  )
}
