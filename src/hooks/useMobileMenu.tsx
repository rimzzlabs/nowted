import { atom, useAtom } from 'jotai'

const AtomMobileMenu = atom(false)

/**
 * the order is `[state, toggle, open, close]`
 * @returns
 */
export const useMobileMenu = () => {
  const [open, setOpen] = useAtom(AtomMobileMenu)

  const toggleMenu = () => setOpen((prev) => !prev)
  const openMenu = () => setOpen(true)
  const closeMenu = () => setOpen(false)

  return [open, toggleMenu, openMenu, closeMenu] as const
}
