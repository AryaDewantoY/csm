import { Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
const font = Manrope({ subsets: ['latin'] })

// Di layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'PT. Cipta Semangat Maju',
    template: '%s | PT. Cipta Semangat Maju'
  },
  icons: {
    icon: '/images/beliefs/swirls.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
      
        <Header />
        <div className="h-[92px] lg:h-[116px] w-full" />

        <Aoscompo>
          <main>
            {children}
          </main>
          <Footer />
        </Aoscompo>
        
        <ScrollToTop />
      </body>
    </html>
  )
}