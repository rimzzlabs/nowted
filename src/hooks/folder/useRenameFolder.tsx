import { useState } from 'react'
import { useMutateFolder } from './useMutateFolder'

type TPropsHook = {
  folderId: string
  name: string
}

export const useRenameNote = (props: TPropsHook) => {
  const { renameFolder } = useMutateFolder()
  const [title, setTitle] = useState(props.name)
  const [active, setActive] = useState(false)

  const mutateFolder = () => {
    if (title === '') {
      setTitle(props.name)
      return
    }
    renameFolder(props.folderId, title)
  }

  const onChange = <T extends HTMLInputElement>(e: React.ChangeEvent<T>) =>
    setTitle(e.target.value)
  const onBlur = <T,>(e: React.FocusEvent<T>) => {
    e.stopPropagation()
    setActive(false)
    mutateFolder()
  }
  const onKeyDown = <T,>(e: React.KeyboardEvent<T>) => {
    if (e.key === 'Enter') {
      mutateFolder()
      setActive(false)
    }
  }
  const onClick = <T,>(e: React.MouseEvent<T>) => {
    e.stopPropagation()
    setActive(true)
    setTitle(props.name)
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
