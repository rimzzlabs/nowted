import type { Editor } from '@tiptap/react'
import { FiImage } from 'react-icons/fi'

type TProps = {
  editor: Editor | null
}

export const ImageToolbar = (props: TProps) => {
  const handleClick = () => {
    if (!props.editor) return
    const editor = props.editor
    const image = window.prompt('Input image url\n( should be accessible by public )')
    if (!image) return
    editor.chain().focus().setImage({ src: image }).run()
  }

  return (
    <button onClick={handleClick}>
      <FiImage className='w-5 h-5' />
    </button>
  )
}
