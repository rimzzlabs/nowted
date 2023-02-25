import { Editor } from '@tiptap/react'
import { HiOutlineChevronDown } from 'react-icons/hi'
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline
} from 'react-icons/ai'
import { clsxm } from '@/util/clsxm'

type TProps = {
  editor: Editor | null
}

export const EditorToolbar = (props: TProps) => {
  const onClickBold = () => {
    if (!props.editor) return
    const editor = props.editor
    editor.chain().focus().toggleBold().run()
  }
  const onClickItalic = () => {
    if (!props.editor) return
    const editor = props.editor
    editor.chain().focus().toggleItalic().run()
  }
  const onClickUnderline = () => {
    if (!props.editor) return
    const editor = props.editor
    editor.chain().focus().toggleUnderline().run()
  }

  return (
    <div className='w-full flex py-4 border-y border-accent-4'>
      <button className='w-[133px] flex items-center justify-between mr-[30px]'>
        <span>Paragraph</span>
        <HiOutlineChevronDown />
      </button>
      <button className='w-[44px] flex items-center justify-between mr-[30px]'>
        <span>16</span>
        <HiOutlineChevronDown />
      </button>

      <div className='flex items-center space-x-2.5'>
        <button
          onClick={onClickBold}
          className={clsxm(
            props.editor?.isFocused &&
              props.editor?.isActive('bold') &&
              'text-blue-500'
          )}
        >
          <AiOutlineBold className='w-5 h-5' />
        </button>
        <button
          onClick={onClickItalic}
          className={clsxm(
            props.editor?.isFocused &&
              props.editor?.isActive('italic') &&
              'text-blue-500'
          )}
        >
          <AiOutlineItalic className='w-5 h-5' />
        </button>
        <button
          onClick={onClickUnderline}
          className={clsxm(
            props.editor?.isFocused &&
              props.editor?.isActive('underline') &&
              'text-blue-500'
          )}
        >
          <AiOutlineUnderline className='w-5 h-5' />
        </button>
      </div>
    </div>
  )
}
