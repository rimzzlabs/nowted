import { useMobileMenu } from '@/hooks/useMobileMenu'
import { clsxm } from '@/util/clsxm'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { MobileSidebarFolder } from '../Folder'
import { MobileSidebarNote } from '../Note'
import { MobileCreateNote } from './MobileCreateNote'
import { MobileSidebarMore } from './MobileSidebarMore'

export const MobileSidebar = () => {
  const { pathname } = useLocation()
  const { folderId } = useParams()
  const [isOpen, , , closeSidebar] = useMobileMenu()

  const validURLClassName = ['/trash', '/favorites', '/archived']

  return (
    <Transition as={Fragment} show={isOpen}>
      <Dialog as='div' className='relative z-50' onClose={closeSidebar}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-90 -translate-x-64'
            enterTo='opacity-100 scale-100 -translate-x-0'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100 -translate-x-0'
            leaveTo='opacity-0 scale-90 -translate-x-64'
          >
            <Dialog.Panel
              className={clsxm(
                'h-full w-64 py-4 space-y-4 lg:space-y-10 overflow-y-auto',
                'transition-all  bg-accent-1',
                (folderId || validURLClassName.includes(pathname)) && 'bg-accent-2'
              )}
            >
              <MobileCreateNote />

              <MobileSidebarFolder />

              <MobileSidebarNote />

              <MobileSidebarMore />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
