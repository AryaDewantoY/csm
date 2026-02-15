import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'

// import Digital from '@/app/components/Home/Digital'
// import Beliefs from '@/app/components/Home/Beliefs'
// import Work from '@/app/components/Home/Work'
import Team from '@/app/components/Home/Team'
// import Featured from '@/app/components/Home/Featured'
// import Manage from '@/app/components/Home/Manage'
// import FAQ from '@/app/components/Home/FAQ'
import Testimonial from '@/app/components/Home/Testimonials'
// import Articles from '@/app/components/Home/Articles'
// import Join from '@/app/components/Home/Joinus'
// import Insta from '@/app/components/Home/Insta'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PT. Cipta Semangat Maju',
  description: 'Mitra Strategis Suku Cadang Alat Berat & Pertambangan',
  icons: {
    icon: '/images/beliefs/swirls.svg', 
    apple: '/apple-touch-icon.png', 
  },
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Aboutus />
      <Team />
      {/* <Manage /> */}
      <Testimonial />
      {/* <Articles /> */}
    </main>
  );
}