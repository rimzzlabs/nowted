import { useMutateNote } from '@/hooks/note'
import { Note } from '@/hooks/notes'
import { useNowtedEditor } from '@/hooks/useNowtedEditor'
import { clsxm } from '@/util/clsxm'
import { TipTap } from '@/components/TipTap'
import { NowtedHeader } from './NowtedHeader'
import { NowtedBubble } from './BubbleMenu'

export const Nowted = (note: Note) => {
  const { updateContent } = useMutateNote()
  const editor = useNowtedEditor({
    content: note.content,
    noteId: note.note_id,
    updateContent
  })

  return (
    <div
      className={clsxm(
        'flex flex-col',
        'px-[50px] pb-4',
        'w-[calc(100vw-650px)] h-screen',
        'overflow-y-auto custom-sb',
        'bg-accent-1'
      )}
    >
      <NowtedHeader
        isFavorite={note.isFavorite}
        created_at={note.created_at}
        folderId={note.folder_id}
        noteId={note.note_id}
        title={note.title}
        editor={editor}
      />

      <NowtedBubble editor={editor} />
      <TipTap editor={editor} />
    </div>
  )
}
