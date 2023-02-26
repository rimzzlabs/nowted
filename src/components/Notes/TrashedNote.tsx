import { AtomFilteredNotes, AtomQueryNotes } from '@/hooks/notes'
import { clsxm } from '@/util/clsxm'
import { NoteListWrapper } from '@/components/NoteList'
import { NoteCard } from '@/components/Note'
import { useTrash } from '@/hooks/trash/useTrash'
import { useAtomValue } from 'jotai'

export const TrashedNote = () => {
  const queryNotes = useAtomValue(AtomQueryNotes)
  const n = useAtomValue(AtomFilteredNotes)
  const { onClickNoteCard, selectedHasNote } = useTrash()

  const trashedNotes = n.filter((n) => n.isTrashed)

  return (
    <NoteListWrapper>
      <div className='sticky top-0 flex items-center h-24 bg-accent-2'>
        <h2 className='font-semibold text-[22px]'>Trash</h2>
      </div>

      {trashedNotes.length === 0 && queryNotes === '' && (
        <div className={clsxm('flex items-center justify-center', 'w-full h-72', 'text-center')}>
          <p>
            When you delete your notes, it will be visible here, to make sure you wanna still keep
            it or you really want to delete it.
          </p>
        </div>
      )}

      {trashedNotes.length === 0 && queryNotes !== '' && (
        <div className={clsxm('flex items-center justify-center', 'w-full h-72', 'text-center')}>
          <p>Can&apos;t find your notes, try a different keyword?</p>
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
