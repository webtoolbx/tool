import { Inter } from 'next/font/google'
import { prefix } from "../../conifg/config";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Webtool Box',
  description: 'Use a useful web tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href={`${prefix}`}>WebTool</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href={`${prefix}`}>Home</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright © Your Website 2023</p></div>
      </footer>
      </body>
    </html>
  )
}
