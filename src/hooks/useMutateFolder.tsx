import { useSetAtom } from 'jotai'
import { v4 as uuid } from 'uuid'
import { useActiveFolder } from './useActiveFolder'
import { useActiveNote } from './useActiveNote'
import { AtomFolders, Folder } from './useFolders'
import { useNotes } from './useNotes'

export const useMutateFolder = () => {
  const setFolders = useSetAtom(AtomFolders)
  const { notes, setNotes } = useNotes()
  const { folderId, updateFolderId } = useActiveFolder()
  const { noteId, updateNoteId } = useActiveNote()

  const deleteFolder = (targetFolderId: string) => {
    setFolders((prev) => prev.filter((f) => f.folder_id !== targetFolderId))
    setNotes((prev) => prev.filter((n) => n.folder_id !== targetFolderId))
    const targetNote =
      notes.find((n) => n.note_id === noteId && n.folder_id === targetFolderId) ?? null
    if (targetNote) {
      updateNoteId(null)
    }
    const isSameFolder = folderId === targetFolderId
    if (isSameFolder) {
      updateFolderId(null)
    }
  }

  const createFolder = (name: string) => {
    const folder: Folder = { created_at: new Date().toISOString(), folder_id: uuid(), name }
    setFolders((prev) => [...prev, folder])
  }

  return { deleteFolder, createFolder }
}
