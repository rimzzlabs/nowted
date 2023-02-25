import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

type TProps = {
  children: React.ReactNode
  show: boolean
}

export const NoteListWrapper = (props: TProps) => {
  return (
    <Transition
      appear
      show={props.show}
      as={Fragment}
      enterFrom='opacity-0 transform -translate-x-14'
      enter='ease-out duration-300 delay-300'
      enterTo='opacity-100 -translate-x-0'
    >
      <div className='w-[350px] pb-[23px] px-5 h-screen overflow-y-auto custom-sb bg-accent-2'>
        {props.children}
      </div>
    </Transition>
  )
}
