import type { Note } from '@/hooks/notes'
import { clsxm } from '@/util/clsxm'
import { formatDate, removeHTMLTag } from '@/util/notes'

export type OnClickCard = (n: Note) => () => void | ((n: Note) => () => Promise<void>)

type TProps = {
  onClick?: OnClickCard
  className?: string
} & Note

export const NoteCard = ({ onClick, className, ...note }: TProps) => {
  return (
    <div
      onClick={onClick?.(note)}
      className={clsxm(
        'w-full',
        'p-5 rounded transition',
        'mb-5 last-of-type:mb-0 cursor-pointer',
        'bg-accent-3 hover:bg-accent-4',
        className
      )}
    >
      <p className='text-lg font-semibold mb-2.5'>{note.title}</p>

      <div className='flex items-center select-none'>
        <span className='text-text-2 mr-2.5'>{formatDate(note.created_at)}</span>
        <span className='truncate'>{removeHTMLTag(note.content)}</span>
      </div>
    </div>
  )
}
