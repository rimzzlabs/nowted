import { clsxm } from '@/util/clsxm'
import type { Editor } from '@tiptap/react'
import { BubbleMenu } from '@tiptap/react'
import { AiOutlineBold, AiOutlineItalic, AiOutlineUnderline } from 'react-icons/ai'
import { FiImage, FiLink } from 'react-icons/fi'

type TProps = {
  editor: Editor | null
}

export const NowtedBubble = (props: TProps) => {
  const editor = props.editor
  if (!editor) return null

  const handleClickLink = () => {
    const prevLink = editor.getAttributes('link').href as string
    const href = window.prompt('Input valid url', prevLink)
    if (href === null) return

    if (href === '') {
      editor.chain().focus().unsetLink().run()
      return
    }

    editor.chain().focus().setLink({ href }).run()
  }

  const handleClickImage = () => {
    const image = window.prompt('Input image url\n( should be accessible by public )')
    if (!image) return
    editor.chain().focus().setImage({ src: image }).run()
  }

  return (
    <BubbleMenu editor={editor} className='flex'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={clsxm(
          'inline-flex items-center justify-center',
          'w-9 h-9',
          'bg-accent-4 hover:bg-accent-3',
          editor.isActive('bold') && 'text-blue-500'
        )}
      >
        <AiOutlineBold className='w-5 h-5' />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={clsxm(
          'inline-flex items-center justify-center',
          'w-9 h-9',
          'bg-accent-4 hover:bg-accent-3',
          editor.isActive('italic') && 'text-blue-500'
        )}
      >
        <AiOutlineItalic className='w-5 h-5' />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={clsxm(
          'inline-flex items-center justify-center',
          'w-9 h-9',
          'bg-accent-4 hover:bg-accent-3',
          editor.isActive('underline') && 'text-blue-500'
        )}
      >
        <AiOutlineUnderline className='w-5 h-5' />
      </button>

      <button
        onClick={handleClickLink}
        className={clsxm(
          'inline-flex items-center justify-center',
          'w-9 h-9 ml-2.5',
          'bg-accent-4 hover:bg-accent-3',
          editor.isActive('link') && 'text-blue-500'
        )}
      >
        <FiLink className='w-5 h-5' />
      </button>
      <button
        onClick={handleClickImage}
        className={clsxm(
          'inline-flex items-center justify-center',
          'w-9 h-9',
          'bg-accent-4 hover:bg-accent-3',
          editor.isActive('image') && 'text-blue-500'
        )}
      >
        <FiImage className='w-5 h-5' />
      </button>
    </BubbleMenu>
  )
}
