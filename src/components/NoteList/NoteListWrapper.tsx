type TProps = {
  children: React.ReactNode
}

export const NoteListWrapper = (props: TProps) => {
  return (
    <div className='w-[350px] pb-[23px] px-5 h-screen overflow-y-auto custom-sb bg-accent-2'>
      {props.children}
    </div>
  )
}
