import { useActiveFolder } from '@/hooks/useActiveFolder'
import { useActiveNote } from '@/hooks/useActiveNote'
import { useMore } from '@/hooks/useMore'
import { useNote } from '@/hooks/useNote'
import { clsxm } from '@/util/clsxm'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { HiOutlineDocumentText, HiOutlineFolder } from 'react-icons/hi'
import { NowTedBody } from './NowtedBody'
import { NowtedHeader } from './NowtedHeader'

export const Nowted = () => {
  const { folderId } = useActiveFolder()
  const { more } = useMore()
  const { noteId } = useActiveNote()
  const note = useNote(noteId)

  const getDescription = (hasFolder: boolean) => {
    if (hasFolder) {
      return 'Choose a note from the list on the left to view its contents. Or create a new note to add to your collection.'
    }
    return 'Choose a folder from the sidebar to start. Or create a new folder to add to your collection.'
  }

  const getTitle = (hasFolder: boolean) => {
    if (hasFolder) return 'Select a note to view'
    return 'Select a folder to start'
  }

  if (!noteId || !note)
    return (
      <div
        className={clsxm(
          'w-[calc(100vw-300px)] h-screen',
          'flex flex-col items-center justify-center',
          (more || folderId) && 'w-[calc(100vw-650px)] bg-accent-1'
        )}
      >
        {folderId ? (
          <HiOutlineDocumentText className='w-20 h-20' />
        ) : (
          <HiOutlineFolder className='w-20 h-20' />
        )}
        <p className='font-semibold text-[28px] mb-2'>{getTitle(!!folderId)}</p>
        <p className='text-center max-w-sm'>{getDescription(!!folderId)}</p>
      </div>
    )

  return (
    <Transition
      appear
      show={!!noteId}
      as={Fragment}
      enterFrom='opacity-0 scale-95'
      enter='ease-out duration-300 delay-150'
      enterTo='opacity-100 scale-100'
    >
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
    </Transition>
  )
}
