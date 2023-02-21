import { atom, useAtom } from 'jotai'
import { useActiveFolder } from './useActiveFolder'

type More = 'trash' | 'favorites' | 'archived'

export const AtomMore = atom<More | null>(null)

export const useMore = () => {
  const [more, setMore] = useAtom(AtomMore)
  const { updateFolderId } = useActiveFolder()

  const updateMore = (newValue: More | null) => {
    updateFolderId(null)
    setMore(newValue)
  }

  return { updateMore, more }
}
