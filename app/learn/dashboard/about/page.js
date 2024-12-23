"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function Page() {
    const pathname = usePathname()

    const searchParams = useSearchParams()

    function updateSorting(sortOrder) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort', sortOrder)
        window.history.pushState(null, '', `?${params.toString()}`)
    }

    return <>
        <h1>Hello, About!</h1>
        <div>
            pathname:{pathname}
        </div>

        <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
        <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </>
}