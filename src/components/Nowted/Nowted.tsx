import { Note } from '@/hooks/useNotes'
import { clsxm } from '@/util/clsxm'
import { NowTedBody } from './NowtedBody'
import { NowtedHeader } from './NowtedHeader'

export const Nowted = (note: Note) => {
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
