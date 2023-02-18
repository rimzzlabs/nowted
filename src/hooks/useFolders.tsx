import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export type Folder = {
  name: string
  folder_id: string
  created_at: string
}

export const FOLDERS_KEY = 'X-FOLDER-LIST'

export const AtomFolders = atomWithStorage<Folder[]>(FOLDERS_KEY, [])

export const useFolders = () => {
  const [folders, setFolders] = useAtom(AtomFolders)

  const orderedFolders = folders.sort((a, b) => {
    return new Date(a.created_at) > new Date(b.created_at)
      ? -1
      : new Date(a.created_at) < new Date(b.created_at)
      ? 1
      : 0
  })

  return { folders: orderedFolders, setFolders }
}
