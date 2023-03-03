import { useEffect, useState } from 'react'

/**
 *
 * @param width should be with pixel (1024px) for example
 * @returns if it matches or not
 */
export const useMediaLayout = (minWidth: string): boolean => {
  const getMatches = (minWidth: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(`(min-width: ${minWidth})`).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(minWidth))

  const handleChange = () => {
    setMatches(getMatches(minWidth))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(`(min-width: ${minWidth})`)

    // Triggered at the first client-side load and if width changes
    handleChange()

    // Listen matchMedia

    matchMedia.addEventListener('change', handleChange)

    return () => matchMedia.removeEventListener('change', handleChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minWidth])

  return matches
}
