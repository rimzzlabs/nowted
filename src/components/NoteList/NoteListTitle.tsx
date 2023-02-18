import { useFolders } from '@/hooks/useFolders'
import { useMemo } from 'react'

type TProps = {
  folderId: string
}

export const NoteListTitle = (props: TProps) => {
  const { folders } = useFolders()

  const folder = useMemo(
    () => folders.find((f) => f.folder_id === props.folderId) ?? null,
    [folders, props.folderId]
  )

  if (!props.folderId || !folder) return null

  const name = folder.name.length > 52 ? folder.name.slice(0, 52) + '...' : folder.name

  return (
    <div className='sticky top-0 flex items-center h-24 bg-accent-2'>
      <h2 className='font-semibold text-[22px]'>{name}</h2>
    </div>
  )
}
