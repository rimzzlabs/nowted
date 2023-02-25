/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const UnstyledLink = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    return (
      <Link {...props} ref={ref}>
        {props.children}
      </Link>
    )
  }
)
