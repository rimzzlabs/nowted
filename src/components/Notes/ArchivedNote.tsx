import { useNotes } from '@/hooks/notes'
import { clsxm } from '@/util/clsxm'
import { NoteCard } from '@/components/Note/NoteCard'
import { NoteListWrapper } from '@/components/NoteList/NoteListWrapper'
import { useArchive } from '@/hooks/archive'

export const ArchivedNote = () => {
  const { notes: n } = useNotes()
  const { onClickNoteCard, selectedHasNote } = useArchive()

  const archivedNotes = n.filter((n) => n.isArchived)

  return (
    <NoteListWrapper>
      <div className='sticky top-0 flex items-center h-24 bg-accent-2'>
        <h2 className='font-semibold text-[22px]'>Archived</h2>
      </div>

      {archivedNotes.length === 0 && (
        <div className={clsxm('flex items-center justify-center', 'w-full h-72', 'text-center')}>
          <p>When you archive your notes, it will be visible here!</p>
        </div>
      )}

      {archivedNotes.length > 0 &&
        archivedNotes.map((n) => (
          <NoteCard
            onClick={onClickNoteCard}
            className={clsxm(selectedHasNote(n.note_id) && 'bg-accent-4')}
            key={n.note_id}
            {...n}
          />
        ))}
    </NoteListWrapper>
  )
}
