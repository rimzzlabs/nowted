import { Navigate, useLocation, useParams } from 'react-router-dom'

export default function StaticNotePage() {
  const { folderId } = useParams()
  console.info(useLocation())

  if (folderId) return <Navigate to={`/folder/${folderId}`} replace />
  return <Navigate to='/' replace />
}
