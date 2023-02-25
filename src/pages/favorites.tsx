import { FavoritesNote } from '@/components/Notes'
import { Nowted } from '@/components/Nowted'
import { useActiveNote } from '@/hooks/useActiveNote'
import { AtomNotes } from '@/hooks/useNotes'
import { clsxm } from '@/util/clsxm'
import { useAtomValue } from 'jotai'
import { HiOutlineDocumentText } from 'react-icons/hi'

export default function HomePage() {
  const notes = useAtomValue(AtomNotes)
  const { noteId } = useActiveNote()
  const note = notes.find((n) => n.note_id === noteId)

  return (
    <div className='flex'>
      <FavoritesNote />
      {note && <Nowted {...note} />}

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
