import { atom, useAtom } from 'jotai'
import { useMutateFolder } from './useMutateFolder'

const AtomActive = atom(false)
const AtomNewFolderName = atom('')

export const useCreateFolder = () => {
  const { createFolder } = useMutateFolder()

  const [active, setActive] = useAtom(AtomActive)
  const [name, setName] = useAtom(AtomNewFolderName)

  const resetState = () => {
    setActive(false)
    setName('')
  }

  const onClickButton = () => setActive(true)
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (name === '') {
        resetState()
        return
      }
      createFolder(name)
      resetState()
    }
  }
  const onBlur = () => {
    if (name === '') {
      resetState()
      return
    }
    createFolder(name)
  }

  return {
    active,
    name,
    onClickButton,
    onChangeName,
    onKeyDown,
    onBlur
  }
}
