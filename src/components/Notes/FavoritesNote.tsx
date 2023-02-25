import { useNotes } from '@/hooks/useNotes'
import { clsxm } from '@/util/clsxm'
import { NoteCard } from '@/components/Note/NoteCard'
import { NoteListWrapper } from '@/components/NoteList/NoteListWrapper'

export const FavoritesNote = () => {
  const { notes: n } = useNotes()

  const favNotes = n.filter((n) => n.isFavorite)
  const show = favNotes.length === 0 || favNotes.length > 0

  return (
    <NoteListWrapper show={show}>
      <div className='sticky top-0 flex items-center h-24 bg-accent-2'>
        <h2 className='font-semibold text-[22px]'>Favorites</h2>
      </div>

      {favNotes.length === 0 && (
        <div className={clsxm('flex items-center justify-center', 'w-full h-72', 'text-center')}>
          <p>Add some of your notes as your favorite notes, then it will be visible here.</p>
        </div>
      )}

      {favNotes.length > 0 && favNotes.map((n) => <NoteCard key={n.note_id} {...n} />)}
    </NoteListWrapper>
  )
}
