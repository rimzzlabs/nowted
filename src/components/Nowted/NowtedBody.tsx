import { useMutateNote } from '@/hooks/note'
import { useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extension-placeholder'
import { TipTap } from '@/components/TipTap'
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight'

import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import tsx from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/atom-one-dark.css'
import { lowlight } from 'lowlight'
import { clsxm } from '@/util/clsxm'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)
lowlight.registerLanguage('tsx', tsx)

type TProps = {
  content: string
  noteId: string
}

export const NowTedBody = (props: TProps) => {
  const { updateContent } = useMutateNote()

  const editor = useEditor({
    content: props.content,
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      CodeBlockLowlight.configure({ lowlight }),
      Placeholder.configure({
        placeholder: 'Write your notes here!',
        emptyEditorClass: clsxm(
          'before:content-[attr(data-placeholder)]',
          'before:absolute before:top-0 before:left-0.5',
          'before:text-white/50 before:font-normal',
          'before:pointer-events-none'
        )
      })
    ],
    onUpdate({ editor }) {
      const content = editor.getHTML()
      updateContent(props.noteId, content)
    },
    editorProps: { attributes: { class: 'outline-none prose prose-invert max-w-full' } },
    onCreate({ editor }) {
      editor.commands.setContent(props.content)
    }
  })

  return <TipTap editor={editor} />
}
