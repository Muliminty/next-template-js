'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Layout({ children }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Link href="/learn/dashboard/about">About</Link>
        <br/>
        <Link href="/learn/dashboard/settings">Settings</Link>
      </div>
      <h1>Layout++++ {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {children}
    </>
  )
}