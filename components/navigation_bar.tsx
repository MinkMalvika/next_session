import Link from 'next/link';
import React from 'react';
export default function NavigationBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="font-bold text-lg flex justify-center w-full">
        <Link href="/" className='px-4'>Home</Link>
        <Link href="/about"className='px-4'>About</Link>
        <Link href="/blog"className='px-4'>Blog</Link>
      </h1>
    </div>
  )
}