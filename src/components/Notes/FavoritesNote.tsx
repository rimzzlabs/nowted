import { useNotes } from '@/hooks/useNotes'
import { clsxm } from '@/util/clsxm'
import { NoteCard, OnClickCard } from '@/components/Note/NoteCard'
import { NoteListWrapper } from '@/components/NoteList/NoteListWrapper'
import { useActiveNote } from '@/hooks/useActiveNote'

export const FavoritesNote = () => {
  const { notes: n } = useNotes()
  const { noteId, updateNoteId } = useActiveNote()
  const favNotes = n.filter((n) => n.isFavorite)

  const getActiveNote = (id: string) => noteId === id

  const onClickNoteCard: OnClickCard = (note) => {
    return () => updateNoteId(note.note_id)
  }

  return (
    <NoteListWrapper>
      <div className='sticky top-0 flex items-center h-24 bg-accent-2'>
        <h2 className='font-semibold text-[22px]'>Favorites</h2>
      </div>

      {favNotes.length === 0 && (
        <div className={clsxm('flex items-center justify-center', 'w-full h-72', 'text-center')}>
          <p>Add some of your notes as your favorite notes, then it will be visible here.</p>
        </div>
      )}

      {favNotes.length > 0 &&
        favNotes.map((n) => (
          <NoteCard
            onClick={onClickNoteCard}
            className={clsxm(getActiveNote(n.note_id))}
            key={n.note_id}
            {...n}
          />
        ))}
    </NoteListWrapper>
  )
}
