import React from 'react'
import { Link } from './next/link'

export const Logo = ({ title }) => {
  return (
    <Link
      href="/"
      style={{
        color: `inherit`,
      }}
    >
      {title}
    </Link>
  )
}
