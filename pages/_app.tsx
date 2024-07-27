import { Vazirmatn } from 'next/font/google'
const vazirmatn = Vazirmatn({ subsets: ['latin'] })
import '../pages/globals.css'

 
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <main className={vazirmatn.className}> <Component {...pageProps} /></main>
}