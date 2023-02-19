import { useRenameNote } from '@/hooks/useRenameNote'
import { clsxm } from '@/util/clsxm'

type TProps = {
  noteId: string
  title: string
}

export const NowtedTitle = (props: TProps) => {
  const { active, onClick, onChange, title, onBlur, onKeyDown } = useRenameNote(props)

  return (
    <div className='w-11/12 mr-2.5'>
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
            'font-semibold text-[32px]',
            'outline-none bg-transparent',
            'border-b border-accent-4'
          )}
        />
      )}
      {!active && (
        <h3 onClick={onClick} className='font-semibold text-[32px] truncate'>
          {props.title}
        </h3>
      )}
    </div>
  )
}
