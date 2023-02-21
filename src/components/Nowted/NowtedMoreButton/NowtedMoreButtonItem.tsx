import { useMoreButton } from '@/hooks/note'
import { useModalConfirm } from '@/hooks/useModalConfirm'
import { clsxm } from '@/util/clsxm'
import { Menu } from '@headlessui/react'
import { NoteMenu } from './NowtedMoreButton'

type TProps = NoteMenu & { noteId: string }
export const NowtedMoreButtonItem = (props: TProps) => {
  const { getText, setArchive, setFavorites, setTrash } = useMoreButton()
  const { openModal } = useModalConfirm()

  const fns = {
    fav: setFavorites,
    archive: setArchive,
    delete: setTrash
  }

  const text = getText(props.noteId, props.type)

  if (props.type === 'delete') {
    return (
      <div className='mt-2.5 pt-2.5 border-t border-t-white/20'>
        <Menu.Item
          as='button'
          onClick={openModal({
            title: text.title,
            description: text.description,
            onConfirm: () => fns[props.type](props.noteId)
          })}
          className={({ active }) =>
            clsxm(
              'inline-flex items-center',
              'h-10 w-full',
              'text-left px-4 rounded',
              active && 'bg-accent-3'
            )
          }
        >
          <props.Icon className='mr-[15px] w-5 h-5' />
          <span>{props.name}</span>
        </Menu.Item>
      </div>
    )
  }

  return (
    <Menu.Item
      as='button'
      onClick={openModal({
        title: text.title,
        description: text.description,
        onConfirm: () => fns[props.type](props.noteId),
        confirmBtnStyle: props.type === 'fav' ? 'bg-blue-600 hover:bg-blue-700' : undefined
      })}
      className={({ active }) =>
        clsxm(
          'inline-flex items-center',
          'h-10 w-full',
          'text-left px-4 rounded',
          active && 'bg-accent-3'
        )
      }
    >
      <props.Icon className='mr-[15px] w-5 h-5' />
      <span>{props.name}</span>
    </Menu.Item>
  )
}
