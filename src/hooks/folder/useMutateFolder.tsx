import { useSetAtom } from 'jotai'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { useActiveNote } from '../useActiveNote'
import { useNotes } from '../useNotes'

import { AtomFolders, Folder } from './useFolders'

export const useMutateFolder = () => {
  const setFolders = useSetAtom(AtomFolders)
  const { notes, setNotes } = useNotes()
  const { noteId, updateNoteId } = useActiveNote()
  const { folderId } = useParams()
  const nTo = useNavigate()

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
      nTo('/folder')
    }
  }

  const createFolder = (name: string) => {
    const folder: Folder = { created_at: new Date().toISOString(), folder_id: uuid(), name }
    setFolders((prev) => [...prev, folder])
  }

  const renameFolder = (folderId: string, name: string) => {
    setFolders((folders) => {
      const folder = folders.find((f) => f.folder_id === folderId)
      if (!folder) return folders
      const sliced = folders.filter((f) => f.folder_id !== folderId)
      const newFolder: Folder = { ...folder, name }

      return [...sliced, newFolder]
    })
  }

  return { deleteFolder, createFolder, renameFolder }
}
