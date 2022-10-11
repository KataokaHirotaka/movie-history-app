import Link from 'next/link'
import React from 'react'
export const NavItem = () => {
  const links = [
    {
      name: '映画',
      url: '/movie',
    },
    {
      name: 'TV番組・ドラマ',
      url: '/program',
    },
    {
      name: 'マイリスト',
      url: '/mylist',
    },
  ]
  return (
    <>
      {links.map((link, i) => {
        return (
          <li key={i}>
            <Link href={link.url}>
              <a>{link.name}</a>
            </Link>
          </li>
        )
      })}
    </>
  )
}
