import { useActiveFolder } from '@/hooks/useActiveFolder'
import { useActiveNote } from '@/hooks/useActiveNote'
import { useNote } from '@/hooks/useNote'
import { clsxm } from '@/util/clsxm'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { NowTedBody } from './NowtedBody'
import { NowtedHeader } from './NowtedHeader'

export const Nowted = () => {
  const { folderId } = useActiveFolder()
  const { noteId } = useActiveNote()
  const note = useNote(noteId)

  if (!noteId || !note)
    return (
      <div
        className={clsxm(
          'w-[calc(100vw-300px)] h-screen',
          'flex flex-col items-center justify-center',
          folderId && 'w-[calc(100vw-650px)] bg-accent-1'
        )}
      >
        <HiOutlineDocumentText className='w-20 h-20' />
        <p className='font-semibold text-[28px]'>
          {folderId ? 'Select a note to view' : 'Select a folder to start'}
        </p>
      </div>
    )

  return (
    <div
      className={clsxm(
        'flex flex-col',
        'px-[50px] pb-4',
        'w-[calc(100vw-650px)] h-screen',
        'overflow-y-auto custom-sb',
        'bg-accent-1'
      )}
    >
      <NowtedHeader
        created_at={note.created_at}
        folderId={note.folder_id}
        noteId={note.note_id}
        title={note.title}
      />

      <NowTedBody key={note.note_id} noteId={note.note_id} content={note.content} />
    </div>
  )
}
