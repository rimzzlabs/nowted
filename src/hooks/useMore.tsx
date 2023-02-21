import { atom, useAtom } from 'jotai'

type More = 'trash' | 'favorites' | 'archived'

export const AtomMore = atom<More | null>(null)

export const useMore = () => {
  const [more, setMore] = useAtom(AtomMore)

  const updateMore = (newValue: More) => setMore(newValue)

  return { updateMore, more }
}
