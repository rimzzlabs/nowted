import { atom, useAtom } from 'jotai'

export const AtomActiveFolder = atom<null | string>(null)

export const useActiveFolder = () => {
  const [folderId, setFolderId] = useAtom(AtomActiveFolder)

  const updateFolderId = (folderId: string | null) => setFolderId(folderId)

  return {
    folderId,
    updateFolderId
  }
}
