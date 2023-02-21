import { NoteList } from '@/components/NoteList'
import { Nowted } from '@/components/Nowted'
import { Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

export default function HomePage() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <Transition
      as={Fragment}
      show={show}
      enterFrom='opacity-0 scale-95'
      enter='ease-out duration-300'
      enterTo='opacity-100 scale-100'
    >
      <div className='flex'>
        <NoteList />
        <Nowted />
      </div>
    </Transition>
  )
}
