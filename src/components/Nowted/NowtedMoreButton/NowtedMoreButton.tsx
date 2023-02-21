import { clsxm } from '@/util/clsxm'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import type { IconType } from 'react-icons'
import {
  HiOutlineArchive,
  HiOutlineDotsCircleHorizontal,
  HiOutlineStar,
  HiOutlineTrash
} from 'react-icons/hi'
import { v4 as uuid } from 'uuid'
import { NowtedMoreButtonItem } from './NowtedMoreButtonItem'

type TProps = {
  noteId: string
}

export type NoteMenu = {
  id: string
  name: string
  Icon: IconType
  type: 'fav' | 'archive' | 'delete'
}

export const NowtedMoreButton = (props: TProps) => {
  const menus: NoteMenu[] = [
    {
      id: uuid(),
      name: 'Add to favorites',
      type: 'fav',
      Icon: HiOutlineStar
    },
    {
      id: uuid(),
      name: 'Archive',
      type: 'archive',
      Icon: HiOutlineArchive
    },
    {
      id: uuid(),
      name: 'Delete',
      type: 'delete',
      Icon: HiOutlineTrash
    }
  ]

  return (
    <Menu as='div' className={clsxm('relative', 'z-10')}>
      <Menu.Button>
        <HiOutlineDotsCircleHorizontal className='w-[30px] h-[30px]' />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          className={clsxm(
            'absolute right-0 top-9',
            'inline-flex flex-col w-[212px]',
            'overflow-hidden p-[15px] rounded',
            'bg-accent-4'
          )}
        >
          {menus.map((menu) => {
            return <NowtedMoreButtonItem key={menu.id} noteId={props.noteId} {...menu} />
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
