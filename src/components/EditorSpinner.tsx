import { CgSpinner } from 'react-icons/cg'

export const EditorSpinner = () => {
  return (
    <div className='flex items-center justify-center w-[calc(100vw-650px)] h-screen'>
      <CgSpinner className='w-14 h-14 animate-spin' />
    </div>
  )
}
