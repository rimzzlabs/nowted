import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FolderHomePage() {
  const nTo = useNavigate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => nTo('/'), [])
  return null
}
