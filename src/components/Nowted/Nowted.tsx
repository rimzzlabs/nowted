import { useActiveNote } from '@/hooks/useActiveNote'
import { useNote } from '@/hooks/useNote'
import { clsxm } from '@/util/clsxm'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { NowTedBody } from './NowtedBody'
import { NowtedHeader } from './NowtedHeader'

type TProps = {
  folderId: string
}

export const Nowted = (props: TProps) => {
  const { noteId } = useActiveNote()
  const note = useNote(noteId)

  if (!noteId || !note)
    return (
      <div
        className={clsxm(
          'w-[calc(100vw-300px)] h-screen',
          'flex flex-col items-center justify-center',
          props?.folderId && 'w-[calc(100vw-650px)] bg-accent-1'
        )}
      >
        <HiOutlineDocumentText className='w-20 h-20' />

        <p className='font-semibold text-[28px] mb-2'>Select a note to view</p>
        <p className='text-center max-w-sm'>
          Choose a note from the list on the left to view its contents. Or create a new note to add
          to your collection.
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
        isFavorite={note.isFavorite}
        created_at={note.created_at}
        folderId={note.folder_id}
        noteId={note.note_id}
        title={note.title}
      />

      <NowTedBody key={note.note_id} noteId={note.note_id} content={note.content} />
    </div>
  )
}
