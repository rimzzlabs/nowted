import { clsxm } from '@/util/clsxm'
import { useEditor } from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'
import TiptapLink from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import StarterKit from '@tiptap/starter-kit'

import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import tsx from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/atom-one-dark.css'
import { lowlight } from 'lowlight'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)
lowlight.registerLanguage('tsx', tsx)

type TProps = {
  content: string
  noteId: string
  updateContent: (id: string, content: string) => void
}

export const useNowtedEditor = (props: TProps) => {
  return useEditor({
    content: props.content,
    extensions: [
      StarterKit.configure({ codeBlock: false, dropcursor: { class: 'text-white w-0.5' } }),
      Underline.configure({ HTMLAttributes: { class: 'underline' } }),
      Table.configure({
        allowTableNodeSelection: true,
        HTMLAttributes: { class: 'table-fixed not-prose' }
      }),
      TableHeader.configure({
        HTMLAttributes: {
          class: 'relative border border-accent-4 border-collapse px-1.5 py-2 bg-accent-2'
        }
      }),
      TableRow,
      TableCell.configure({
        HTMLAttributes: { class: 'relative border border-accent-4 border-collapse px-1.5 py-2' }
      }),
      CodeBlockLowlight.configure({ lowlight }),
      Image.configure({ allowBase64: true }),
      TiptapLink.configure({
        autolink: false,
        protocols: ['ftp', 'mailto'],
        HTMLAttributes: {
          class: 'text-primary underline decoration-primary',
          rel: 'noopener noreferrer'
        }
      }),
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
      props.updateContent(props.noteId, content)
    },
    editorProps: {
      attributes: {
        class: 'outline-none prose prose-invert max-w-full',
        spellCheck: 'false'
      }
    },
    onCreate({ editor }) {
      editor.commands.setContent(props.content)
    }
  })
}
