import { useState } from 'react'
import { useMutateNote } from './useMutateNote'

type TPropsHook = {
  noteId: string
  title: string
}

export const useRenameNote = (props: TPropsHook) => {
  const { updateTitle } = useMutateNote()
  const [title, setTitle] = useState(props.title)
  const [active, setActive] = useState(false)

  const mutateNote = () => {
    if (title === '') {
      setTitle(props.title)
      return
    }
    updateTitle(props.noteId, title)
  }

  const onChange = <T extends HTMLInputElement>(e: React.ChangeEvent<T>) =>
    setTitle(e.target.value)
  const onBlur = <T,>(e: React.FocusEvent<T>) => {
    e.stopPropagation()
    setActive(false)
    mutateNote()
  }
  const onKeyDown = <T,>(e: React.KeyboardEvent<T>) => {
    if (e.key === 'Enter') {
      mutateNote()
      setActive(false)
    }
  }
  const onClick = <T,>(e: React.MouseEvent<T>) => {
    e.stopPropagation()
    setActive(true)
    setTitle(props.title)
  }

  return {
    title,
    active,
    onBlur,
    onChange,
    onClick,
    onKeyDown
  }
}
