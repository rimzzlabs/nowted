import { useModalConfirm } from '@/hooks/useModalConfirm'
import { clsxm } from '@/util/clsxm'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {
  HiOutlineArchive,
  HiOutlineDotsCircleHorizontal,
  HiOutlineStar,
  HiOutlineTrash
} from 'react-icons/hi'
import { v4 as uuid } from 'uuid'

type TProps = {
  noteId: string
}

export const NowtedMoreButton = (props: TProps) => {
  const { openModal } = useModalConfirm()

  const menus = [
    {
      id: uuid(),
      name: 'Mark as favorie',
      Icon: HiOutlineStar,
      onClick: openModal({
        title: 'Mark as favorite?',
        description:
          'You will mark this note as your favorite.\nYou can find your archived note by clicking the Archive button on the left panel.',
        confirmBtnStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
        onConfirm: () => console.info(props.noteId)
      })
    },
    {
      id: uuid(),
      name: 'Archive Note',
      Icon: HiOutlineArchive,
      onClick: openModal({
        title: 'Archive Note?',
        description:
          'You will archive this note.\nArchived note can be restored and, you can find your archived note by clicking the Archive button on the left panel.',
        onConfirm: () => console.info(props.noteId)
      })
    },
    {
      id: uuid(),
      name: 'Delete',
      Icon: HiOutlineTrash,
      onClick: openModal({
        title: 'Delete Note?',
        description:
          'Are you sure you want to delete this Note?.\nThis is irreversible and this note will be permanently DELETED!',
        onConfirm: () => console.info(props.noteId)
      })
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
            'inline-flex flex-col',
            'overflow-hidden rounded',
            'bg-accent-3'
          )}
        >
          {menus.map((menu) => {
            return (
              <Menu.Item
                as='button'
                key={menu.id}
                onClick={menu.onClick}
                className={({ active }) =>
                  clsxm(
                    'inline-flex items-center',
                    'text-left px-4',
                    'h-10 w-44',
                    active && 'bg-accent-4'
                  )
                }
              >
                <menu.Icon className='mr-2.5' />
                <span>{menu.name}</span>
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
