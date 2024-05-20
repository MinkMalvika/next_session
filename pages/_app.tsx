import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavigationBar from '@/components/navigation_bar'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  <h1 className=' font-bold text-lg'>
   <NavigationBar/>

  </h1>
    <Component {...pageProps} />
  </> )
}
