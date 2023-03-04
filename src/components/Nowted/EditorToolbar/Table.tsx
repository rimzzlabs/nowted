import type { Editor } from '@tiptap/react'
import { BsTable } from 'react-icons/bs'
import { FiTrash } from 'react-icons/fi'

type TProps = {
  editor: Editor | null
}

export const TableToolbar = (props: TProps) => {
  const editor = props.editor
  if (!editor) return null

  const handleClick = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
  }
  const handleDeleteTable = () => {
    if (!editor.isActive('table')) return
    editor.chain().focus().deleteTable().run()
  }

  return (
    <>
      <button onClick={handleClick}>
        <BsTable className='w-[1.125rem] h-[1.125rem]' />
      </button>

      {editor.isActive('table') && (
        <button className='ml-2.5' onClick={handleDeleteTable}>
          <FiTrash className='w-5 h-5' />
        </button>
      )}
    </>
  )
}
