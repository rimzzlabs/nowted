import { FavoritesNote } from '@/components/Note'
import { Nowted } from '@/components/Nowted'
import { useTimeoutFn } from '@/hooks/useTimeoutFn'
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function HomePage() {
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
        <FavoritesNote type='favorites' />
        <Nowted folderId='fav' />
      </div>
    </Transition>
  )
}
