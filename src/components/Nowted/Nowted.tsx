import { useMutateNote } from '@/hooks/note'
import { Note } from '@/hooks/notes'
import { useNowtedEditor } from '@/hooks/useNowtedEditor'
import { clsxm } from '@/util/clsxm'
import { TipTap } from '@/components/TipTap'
import { NowtedHeader } from './NowtedHeader'
import { NowtedBubble } from './BubbleMenu'
import { useMediaLayout } from '@/hooks/useMediaLayout'

export const Nowted = (note: Note) => {
  const isBigScreen = useMediaLayout('1024px')
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
        'px-6 lg:px-[50px] pb-4 pt-24 lg:pt-0',
        'w-full h-screen',
        'overflow-y-auto custom-sb',
        'bg-accent-1',
        isBigScreen && 'w-[calc(100vw-650px)] '
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
