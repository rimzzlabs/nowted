import { useMobileMenu } from '@/hooks/useMobileMenu'
import { clsxm } from '@/util/clsxm'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { MobileSidebarFolder } from '../Folder'
import { MobileSidebarNote } from '../Note'
import { MobileSidebarMore } from './MobileSidebarMore'

export const MobileSidebar = () => {
  const { pathname } = useLocation()
  const { folderId } = useParams()
  const [isOpen] = useMobileMenu()

  const validURLClassName = ['/trash', '/favorites', '/archived']

  return (
    <Transition
      as={Fragment}
      show={isOpen}
      enter='transform-[width] duration-200'
      enterFrom='opacity-0 w-0 overflow-x-hidden'
      enterTo='opacity-100 w-64 overflow-x-hidden'
      leave='duration-200 transition-[width] ease-in-out overflow-x-hidden'
      leaveFrom='opacity-100 w-0 overflow-x-hidden'
      leaveTo='opacity-0 w-0'
    >
      <aside className='fixed left-0 inset-y-0 top-[6.725rem] z-50'>
        <div
          className={clsxm(
            'h-full w-64 py-4 space-y-10',
            'transition-all  bg-accent-1',
            (folderId || validURLClassName.includes(pathname)) && 'bg-accent-2'
          )}
        >
          <MobileSidebarFolder />

          <MobileSidebarNote />

          <MobileSidebarMore />
        </div>
      </aside>
    </Transition>
  )
}
