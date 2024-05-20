import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <main
      className={`flex min-h-screen  p-4 ${inter.className}`}
    >
     <div className='flex flex-col items-center py-10 text-lg w-full '>
      <div className='py-10'>About US</div>
        <div className='text-sm font-mono w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, praesentium adipisci. Corrupti, officia distinctio? Eius vero assumenda, quod atque aperiam debitis inventore, a non mollitia qui nobis quam in modi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus explicabo dolor eaque esse ipsum earum iste odit, non eveniet facere adipisci quae architecto, fugit dolore! Sit aperiam eveniet ipsa numquam quod, officia atque nisi tenetur iure eos, voluptatum totam dolorem architecto incidunt! Debitis ut ducimus earum nihil nam tempore illo dolor, voluptates recusandae inventore. Voluptatum quisquam eum perspiciatis eius aperiam sint, ut consectetur maiores ratione error recusandae pariatur nobis voluptas nemo officia ullam! Commodi, temporibus aliquid distinctio earum natus qui odio, reprehenderit maxime cupiditate eos officiis iste et soluta rerum non nemo nostrum? Deleniti excepturi minima repudiandae cupiditate perspiciatis!</div>
     </div>
        

     
    </main>
  )
}
