import { useMutateNote } from '@/hooks/useMutateNote'
import { useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { TipTap } from '../TipTap'

type TProps = {
  content: string
  noteId: string
}

export const NowTedBody = (props: TProps) => {
  const { updateContent } = useMutateNote()

  const editor = useEditor({
    content: props.content,
    extensions: [StarterKit],
    onUpdate({ editor }) {
      const content = editor.getHTML()
      updateContent(props.noteId, content)
    },
    editorProps: { attributes: { class: 'outline-none prose prose-invert max-w-full' } },
    onCreate({ editor }) {
      editor.commands.setContent(props.content)
    }
  })

  return (
    <div className='py-4 space-y-4'>
      <TipTap editor={editor} />
    </div>
  )
}
