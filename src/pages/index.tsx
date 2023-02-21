import { Nowted } from '@/components/Nowted'
import { useTimeoutFn } from '@/hooks/useTimeoutFn'
import { Transition } from '@headlessui/react'
import { useState } from 'react'

export default function HomePage() {
  const [show, setShow] = useState(false)
  useTimeoutFn(() => setShow(true), 300)

  return (
    <Transition
      as='div'
      show={show}
      enterFrom='opacity-0 scale-95'
      enter='ease-out duration-300'
      enterTo='opacity-100 scale-100'
    >
      <Nowted />
    </Transition>
  )
}
