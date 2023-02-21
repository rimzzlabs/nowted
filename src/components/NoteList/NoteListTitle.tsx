type TProps = {
  title: string
}

export const NoteListTitle = (props: TProps) => {
  return (
    <div className='sticky top-0 flex items-center h-24 bg-accent-2'>
      <h2 className='font-semibold text-[22px]'>{props.title}</h2>
    </div>
  )
}
