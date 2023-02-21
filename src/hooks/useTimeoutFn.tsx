import { useEffect } from 'react'

export const useTimeoutFn = (fn: () => void, timeout: number) => {
  useEffect(() => {
    const timer = setTimeout(fn, timeout)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
