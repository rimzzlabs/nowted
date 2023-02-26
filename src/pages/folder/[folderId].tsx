import { RegularNote } from '@/components/Notes'
import { AtomFolders } from '@/hooks/folder'
import { useNote, useActiveNote } from '@/hooks/note'
import { clsxm } from '@/util/clsxm'
import { useAtomValue } from 'jotai'
import { useEffect } from 'react'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { Navigate, useParams } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { EditorSpinner } from '@/components/EditorSpinner'

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

      {!note && (
        <div
          className={clsxm(
            'h-screen flex flex-col',
            'items-center justify-center',
            'w-[calc(100vw-650px)] bg-accent-1'
          )}
        >
          <HiOutlineDocumentText className='w-20 h-20' />

          <p className='font-semibold text-[28px] mb-2'>Select a note to view</p>
          <p className='text-center max-w-sm'>
            Choose a note from the list on the left to view its contents. Or create a new note to
            add to your collection.
          </p>
        </div>
      )}
    </div>
  )
}
