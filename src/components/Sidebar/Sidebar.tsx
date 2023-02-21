import { useTimeoutFn } from '@/hooks/useTimeoutFn'
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { HiOutlineSearch, HiPencil } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { SidebarFolder } from './SidebarFolder'
import { SidebarMore } from './SidebarMore'
import { SidebarNewNote } from './SidebarNewNote'
import { SidebarRecent } from './SidebarRecent'

export const Sidebar = () => {
  const { pathname } = useLocation()
  const [show, setShow] = useState(false)
  useTimeoutFn(() => setShow(true), 200)

  if (pathname === '/404') return null

  return (
    <Transition
      as={Fragment}
      show={show}
      enterFrom='opacity-0'
      enter='ease-out duration-300'
      enterTo='opacity-100'
    >
      <aside className='fixed inset-y-0 left-0'>
        <div className='w-[300px] space-y-[30px] h-full py-[30px] bg-accent-1'>
          <div className='flex px-5'>
            <Link to='/' className='flex'>
              <p className='font-title h-[38px] text-[26px]'>Nowted</p>
              <HiPencil className='ml-2.5' />
            </Link>

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
