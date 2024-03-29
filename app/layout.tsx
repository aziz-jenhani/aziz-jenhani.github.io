import './index.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

/*export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}*/
import { Metadata } from "next";
import Head from 'next/head';
export const metadata: Metadata = {
  metadataBase: new URL("https://aziz-jenhani.github.io"),
  title: {
    default: 'Ahmed Aziz Jenhani',
    template:'%s | Ahmed Aziz Jenhani'
  },
  description: 'this is description of Ahmed Aziz Jenhani',
  verification:{
    google:'google-site-verification=878787878'
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
