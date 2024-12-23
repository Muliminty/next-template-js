'use client'

import { useState } from 'react'

export default function Template({ children }) {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Hello, Template!</h1>
            {children}
        </>
    )
}