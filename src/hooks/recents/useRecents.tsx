import { atom, useAtom, useAtomValue } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { AtomActiveNote } from '@/hooks/useActiveNote'
import { useEffect } from 'react'
import { AtomNotes } from '../useNotes'

export const RECENT_KEY = 'X-RECENT-NOTES'
export const AtomRecents = atomWithStorage<string[]>(RECENT_KEY, [])

const DerivedAtomRecents = atom(
  (get) => {
    const notes = get(AtomNotes)
    const recents = get(AtomRecents)
    // watch for deleted notes / folder / archived notes
    const filtered = recents.filter((id) => {
      return notes.some((n) => n.note_id === id && !n.isArchived && !n.isTrashed)
    })
    return filtered
  },
  (get, set) => {
    const prevValue = get(AtomRecents)
    const nextActiveId = get(AtomActiveNote)
    const notes = get(AtomNotes)

    // `AtomActiveNote` is null on first mount or deleted folder / note
    if (nextActiveId) {
      const prevHasNextValue = prevValue.some((n) => n === nextActiveId)
      const isArchivedOrDeleted = notes.find(
        (n) => n.note_id === nextActiveId && (n.isArchived || n.isTrashed)
      )
      if (prevHasNextValue || isArchivedOrDeleted) return
      set(AtomRecents, [nextActiveId, ...prevValue.slice(0, 2)])
    }
  }
)

export const useRecents = () => {
  const noteId = useAtomValue(AtomActiveNote)
  const [recents, watchRecent] = useAtom(DerivedAtomRecents)

  useEffect(() => {
    if (noteId) watchRecent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId])

  return { recents }
}
