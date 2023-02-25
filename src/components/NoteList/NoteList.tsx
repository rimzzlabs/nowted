import { Note } from '@/hooks/useNotes'
import { clsxm } from '@/util/clsxm'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { NoteListItem } from './NoteListItem'
import { NoteListTitle } from './NoteListTitle'

type TProps = {
  notes: Note[]
  title: string
  show: boolean
  emptyText: string
}

export const NoteList = (props: TProps) => {
  return (
    <Transition
      appear
      show={props.show}
      as={Fragment}
      enterFrom='opacity-0 -translate-x-6'
      enter='ease-out duration-300'
      enterTo='opacity-100 -translate-x-0'
    >
      <div className='w-[350px] pb-[23px] px-5 h-screen overflow-y-auto custom-sb bg-accent-2'>
        <NoteListTitle title={props.title} />

        {props.notes.length === 0 && (
          <div className={clsxm('flex items-center justify-center', 'w-full h-72', 'text-center')}>
            <p>{props.emptyText}</p>
          </div>
        )}

        {props.notes.length > 0 && props.notes.map((n) => <NoteListItem key={n.note_id} {...n} />)}
      </div>
    </Transition>
  )
}
