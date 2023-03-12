import { useFolders } from '@/hooks/folder'
import { formatDate } from '@/util/notes'
import { Editor } from '@tiptap/react'
import { useCallback, useMemo } from 'react'
import { HiOutlineCalendar, HiOutlineFolder } from 'react-icons/hi'
import { EditorToolbar } from './EditorToolbar'
import { NowtedMoreButton } from './NowtedMoreButton'
import { NowtedTitle } from './NowtedTitle'

type TProps = {
  folderId: string
  noteId: string
  title: string
  created_at: string
  isFavorite: boolean
  editor: Editor | null
}

export const NowtedHeader: React.FunctionComponent<TProps> = (props) => {
  const { folders } = useFolders()
  const getFolder = useCallback(
    () => folders.find((f) => f.folder_id === props.folderId) ?? null,
    [props.folderId, folders]
  )

  const folder = useMemo(() => getFolder(), [getFolder])

  return (
    <header className='sticky top-0 pt-6 lg:pt-[50px] z-40 bg-accent-1'>
      <div className='flex items-center mb-4 lg:mb-[35px]'>
        <NowtedTitle noteId={props.noteId} title={props.title} />

        <NowtedMoreButton noteId={props.noteId} />
      </div>

      <div className='w-full flex py-3'>
        <HiOutlineCalendar className='w-[18px] h-[18px] mr-5' />
        <span className='w-[100px]'>Date</span>
        <span>{formatDate(props.created_at)}</span>
      </div>

      <div className='w-full flex py-3 border-t border-t-accent-4'>
        <HiOutlineFolder className='w-5 h-5 mr-5' />
        <span className='w-[100px]'>Folder</span>
        <span>{folder?.name ?? '-'}</span>
      </div>

      <EditorToolbar editor={props.editor} />
    </header>
  )
}
