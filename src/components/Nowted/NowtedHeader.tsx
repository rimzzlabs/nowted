import { useFolders } from '@/hooks/folder'
import { formatDate } from '@/util/notes'
import { useCallback, useMemo } from 'react'
import { HiOutlineCalendar, HiOutlineFolder } from 'react-icons/hi'
import { NowtedMoreButton } from './NowtedMoreButton'
import { NowtedTitle } from './NowtedTitle'

type TProps = {
  folderId: string
  noteId: string
  title: string
  created_at: string
  isFavorite: boolean
}

export const NowtedHeader: React.FunctionComponent<TProps> = (props) => {
  const { folders } = useFolders()
  const getFolder = useCallback(
    () => folders.find((f) => f.folder_id === props.folderId) ?? null,
    [props.folderId, folders]
  )

  const folder = useMemo(() => getFolder(), [getFolder])

  return (
    <header className='sticky top-0 pt-[50px] z-50 bg-accent-1'>
      <div className='flex items-center mb-[35px]'>
        <NowtedTitle noteId={props.noteId} title={props.title} />

        <NowtedMoreButton noteId={props.noteId} />
      </div>

      <div className='flex flex-col w-full divide-y-2 divide-accent-4'>
        <div className='w-full h-[33px] flex py-1'>
          <HiOutlineCalendar className='w-[18px] h-[18px] mr-5' />
          <span className='w-[100px]'>Date</span>
          <span>{formatDate(props.created_at)}</span>
        </div>
        <div className='w-full h-[33px] flex py-1'>
          <HiOutlineFolder className='w-5 h-5 mr-5' />
          <span className='w-[100px]'>Folder</span>
          <span>{folder?.name ?? '-'}</span>
        </div>
      </div>
    </header>
  )
}
