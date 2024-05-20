import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen  p-4 ${inter.className}`}
    >
     <div className='flex flex-col items-center py-10 text-lg w-full '>
      <div className='py-10'>WELCOME TO OUR BLOG PAGE</div>
     <Link href="/blog" className='  text-sm p-4 text-yellow-50 bg-cyan-950 rounded-lg'>CLICK HERE TO READ BLOGS</Link>
     </div>
        

     
    </main>
  )
}
