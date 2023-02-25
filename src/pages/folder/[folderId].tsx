import { RegularNote } from '@/components/Notes'
import { AtomFolders } from '@/hooks/folder'
import { useAtomValue } from 'jotai'
import { Navigate, useParams } from 'react-router-dom'

export default function FolderPage() {
  const folders = useAtomValue(AtomFolders)
  const { folderId } = useParams()
  const validFolder = folders.some((f) => f.folder_id === folderId)

  if (!validFolder || !folderId) return <Navigate to='/folder' replace />

  return (
    <div className='flex'>
      <RegularNote folderId={folderId} />
    </div>
  )
}
