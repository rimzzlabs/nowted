import { useRenameNote } from '@/hooks/folder'
import { clsxm } from '@/util/clsxm'

type TProps = {
  name: string
  folderId: string
}

export const NoteTitle = (props: TProps) => {
  const { active, onBlur, onChange, onClick, onKeyDown, title } = useRenameNote(props)

  return (
    <div className='sticky top-0 flex items-center h-24 bg-accent-2'>
      {active && (
        <input
          type='text'
          autoFocus
          spellCheck={false}
          value={title}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={clsxm(
            'h-12 w-full',
            'font-semibold text-[22px]',
            'outline-none bg-transparent',
            'border-b border-accent-4'
          )}
        />
      )}

      {!active && (
        <h2 onClick={onClick} className='font-semibold text-[22px]'>
          {props.name}
        </h2>
      )}
    </div>
  )
}
