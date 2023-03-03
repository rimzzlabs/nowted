import type { Editor } from '@tiptap/react'
import { FiLink } from 'react-icons/fi'

type TProps = {
  editor: Editor | null
}

export const LinkToolbar = (props: TProps) => {
  const handleClick = () => {
    if (!props.editor) return
    const editor = props.editor
    const href = window.prompt('Input valid url')
    if (!href) return
    editor.chain().focus().toggleLink({ href }).run()
  }

  return (
    <button onClick={handleClick}>
      <FiLink className='w-5 h-5' />
    </button>
  )
}
