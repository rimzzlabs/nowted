import { atom, useAtom } from 'jotai'
import { AtomQueryNotes } from './atom'

const AtomActive = atom(false)

export const useSearchNotes = () => {
  const [active, setActive] = useAtom(AtomActive)
  const [query, setQuery] = useAtom(AtomQueryNotes)

  const onClickSearchButton = () => setActive(true)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)

  const onBlur = () => {
    setActive(false)
  }

  return { active, query, onChange, onClickSearchButton, onBlur }
}
