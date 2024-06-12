"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'


function NavbarItem({ title, param }) {
    const search = useSearchParams()
    const genre = search.get('genre')
  return (
    <div className='max-w-6xl mx-auto p-3 space-y-4'>
        <Link 
            className={` hover:text-amber-600 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-50 rounded-lg' : ''} `}
            href={`/?genre=${param}`}
        >
            {title}
        </Link>
    </div>
  )
}

export default NavbarItem