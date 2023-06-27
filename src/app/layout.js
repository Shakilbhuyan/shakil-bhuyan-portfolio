import Navber from '@/Components/NavBer/Navber'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shakil Bhuyan',
  description: 'Shakil Bhuyan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className='max-w-screen-xl mx-auto'>
       <div>
          <Navber></Navber>
        </div>
        {children}
       </div>
        </body>
    </html>
  )
}
