import { Editor } from '@tiptap/react'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { AiOutlineBold, AiOutlineItalic, AiOutlineUnderline } from 'react-icons/ai'
import { clsxm } from '@/util/clsxm'
import { ImageToolbar } from './Image'
import { LinkToolbar } from './Link'
import { TableToolbar } from './Table'

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
    <div className='w-full flex flex-col lg:flex-row py-4 border-y border-accent-4'>
      <div className='flex mr-[30px] mb-6 lg:mb-0'>
        <button
          disabled
          title='Feature note available 😢'
          className='w-[133px] flex items-center justify-between mr-[30px] disabled:opacity-60 disabled:cursor-not-allowed'
        >
          <span>Paragraph</span>
          <HiOutlineChevronDown />
        </button>

        <button
          disabled
          title='Feature note available 😢'
          className='w-[44px] flex items-center justify-between disabled:opacity-60 disabled:cursor-not-allowed'
        >
          <span>16</span>
          <HiOutlineChevronDown />
        </button>
      </div>

      <div className='flex'>
        <div className='flex items-center space-x-2.5 mr-[30px]'>
          <button
            onClick={onClickBold}
            className={clsxm(
              props.editor?.isFocused && props.editor?.isActive('bold') && 'text-blue-500'
            )}
          >
            <AiOutlineBold className='w-5 h-5' />
          </button>

          <button
            onClick={onClickItalic}
            className={clsxm(
              props.editor?.isFocused && props.editor?.isActive('italic') && 'text-blue-500'
            )}
          >
            <AiOutlineItalic className='w-5 h-5' />
          </button>

          <button
            onClick={onClickUnderline}
            className={clsxm(
              props.editor?.isFocused && props.editor?.isActive('underline') && 'text-blue-500'
            )}
          >
            <AiOutlineUnderline className='w-5 h-5' />
          </button>
        </div>

        <div className='flex items-center space-x-2.5 mr-[30px]'>
          <ImageToolbar editor={props.editor} />

          <LinkToolbar editor={props.editor} />
        </div>

        <TableToolbar editor={props.editor} />
      </div>
    </div>
  )
}
