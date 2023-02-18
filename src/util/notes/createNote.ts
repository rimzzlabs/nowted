import { Note } from '@/hooks/useNotes'
import { v4 as uuid } from 'uuid'

export const createNote = (folder_id: string) => {
  return {
    folder_id,
    note_id: uuid(),
    title: 'New Note',
    content: `<p>A note usually has it's body, you might want to start nowted something eh?</p>`,
    created_at: new Date().toISOString(),
    isArchived: false,
    isFavorite: false,
    isTrashed: false
  } as Note
}
