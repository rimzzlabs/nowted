import { useActiveFolder } from '@/hooks/useActiveFolder'
import { useNotes } from '@/hooks/useNotes'
import { clsxm } from '@/util/clsxm'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { NoteListItem } from './NoteListItem'
import { NoteListTitle } from './NoteListTitle'

export const NoteList = () => {
  const { folderId } = useActiveFolder()
  const { notes } = useNotes()

  const filteredNotes = notes.filter((n) => n.folder_id === folderId)

  if (!folderId) return null

  return (
    <Transition
      appear
      show={!!folderId}
      as={Fragment}
      enterFrom='opacity-0 -translate-x-6'
      enter='ease-out duration-300'
      enterTo='opacity-100 -translate-x-0'
    >
      <div className='w-[350px] pb-[23px] px-5 h-screen overflow-y-auto custom-sb'>
        <NoteListTitle folderId={folderId} />

        {filteredNotes.length === 0 && (
          <div className={clsxm('flex items-center justify-center', 'w-full h-72', 'text-center')}>
            <p>
              It appear you haven&apos;t create a note on this folder yet, why don&apos;t you create
              one?
            </p>
          </div>
        )}

        {filteredNotes.length > 0 &&
          filteredNotes.map((n) => <NoteListItem key={n.note_id} {...n} />)}
      </div>
    </Transition>
  )
}
