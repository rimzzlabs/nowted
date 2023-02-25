import { useNotes } from '@/hooks/useNotes'
import { clsxm } from '@/util/clsxm'
import { NoteListWrapper } from '@/components/NoteList'
import { NoteCard } from '@/components/Note'
import { useTrash } from '@/hooks/trash/useTrash'

export const TrashedNote = () => {
  const { notes: n } = useNotes()
  const { onClickNoteCard, selectedHasNote } = useTrash()

  const trashedNotes = n.filter((n) => n.isTrashed)

  return (
    <NoteListWrapper>
      <div className='sticky top-0 flex items-center h-24 bg-accent-2'>
        <h2 className='font-semibold text-[22px]'>Trash</h2>
      </div>

      {trashedNotes.length === 0 && (
        <div className={clsxm('flex items-center justify-center', 'w-full h-72', 'text-center')}>
          <p>When you delete your notes, it will be visible here!</p>
        </div>
      )}

      {trashedNotes.length > 0 &&
        trashedNotes.map((n) => (
          <NoteCard
            key={n.note_id}
            onClick={onClickNoteCard}
            className={clsxm(selectedHasNote(n.note_id) && 'bg-accent-4')}
            {...n}
          />
        ))}
    </NoteListWrapper>
  )
}
