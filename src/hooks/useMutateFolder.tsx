import { useSetAtom } from 'jotai'
import { v4 as uuid } from 'uuid'
import { AtomFolders, Folder } from './useFolders'
import { AtomNotes } from './useNotes'

export const useMutateFolder = () => {
  const setFolders = useSetAtom(AtomFolders)
  const setNotes = useSetAtom(AtomNotes)

  const deleteFolder = (folderId: string) => {
    setFolders((prev) => prev.filter((f) => f.folder_id !== folderId))
    setNotes((prev) => prev.filter((n) => n.folder_id !== folderId))
  }

  const createFolder = (name: string) => {
    const folder: Folder = { created_at: new Date().toISOString(), folder_id: uuid(), name }
    setFolders((prev) => [...prev, folder])
  }

  return { deleteFolder, createFolder }
}
