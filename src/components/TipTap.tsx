import { Editor, EditorContent } from '@tiptap/react'

type TProps = {
  editor: Editor | null
}

export const TipTap = (props: TProps) => {
  if (!props.editor) return null

  return <EditorContent className='py-4' editor={props.editor} />
}
