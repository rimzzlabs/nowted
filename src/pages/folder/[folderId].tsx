import { RegularNote } from '@/components/Notes'
import { Nowted } from '@/components/Nowted'
import { AtomFolders } from '@/hooks/folder'
import { useActiveNote } from '@/hooks/useActiveNote'
import { useAtomValue } from 'jotai'
import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

export default function FolderPage() {
  const { folderId } = useParams()
  const { updateNoteId } = useActiveNote()
  const folders = useAtomValue(AtomFolders)
  const validFolder = folders.some((f) => f.folder_id === folderId)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => updateNoteId(null), [])

  if (!validFolder || !folderId) return <Navigate to='/folder' replace />

  return (
    <div className='flex'>
      <RegularNote folderId={folderId} />
      <Nowted folderId={folderId} />
    </div>
  )
}
