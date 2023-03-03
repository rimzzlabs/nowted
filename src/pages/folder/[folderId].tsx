import { RegularNote } from '@/components/Notes'
import { AtomFolders } from '@/hooks/folder'
import { useNote, useActiveNote } from '@/hooks/note'
import { useAtomValue } from 'jotai'
import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { EditorSpinner } from '@/components/EditorSpinner'
import { EmptyNote } from '@/components/Note/EmptyNote'

const Nowted = lazy(() => import('@/components/Nowted').then((m) => ({ default: m.Nowted })))

export default function FolderPage() {
  const { folderId } = useParams()
  const { updateNoteId } = useActiveNote()
  const folders = useAtomValue(AtomFolders)
  const validFolder = folders.some((f) => f.folder_id === folderId)
  const { noteId } = useActiveNote()
  const note = useNote(noteId)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => updateNoteId(null), [])

  if (!validFolder || !folderId) return <Navigate to='/folder' replace />

  return (
    <div className='flex'>
      <RegularNote folderId={folderId} />
      <Suspense fallback={<EditorSpinner />}>{note && <Nowted key={noteId} {...note} />}</Suspense>

      {!note && <EmptyNote />}
    </div>
  )
}
