import { Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { HiOutlineSearch, HiPencil } from 'react-icons/hi'
import { SidebarFolder } from './SidebarFolder'
import { SidebarMore } from './SidebarMore'
import { SidebarNewNote } from './SidebarNewNote'
import { SidebarRecent } from './SidebarRecent'

export const Sidebar = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 200)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <Transition
      as={Fragment}
      show={show}
      enterFrom='opacity-0 -left-24'
      enter='ease-out duration-300'
      enterTo='opacity-100 left-0'
      leave='ease-in duration-75'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <aside className='fixed inset-y-0'>
        <div className='w-[300px] space-y-[30px] h-full py-[30px] bg-accent-1'>
          <div className='flex px-5'>
            <p className='font-title h-[38px] text-[26px]'>Nowted</p>
            <HiPencil className='ml-2.5' />

            <button className='ml-auto'>
              <HiOutlineSearch />
            </button>
          </div>

          <SidebarNewNote />
          <SidebarRecent />

          <SidebarFolder />
          <SidebarMore />
        </div>
      </aside>
    </Transition>
  )
}
