import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about-section' }, 
  { label: 'Store', href: '/#team-section' },  
  { label: 'Partnership', href: '/#client-section' },
]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'About Us.',
    slug: 'about-us', 
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph: 'Tim kami selalu siap membantu memberikan penjelasan detail agar Anda mendapatkan solusi terbaik sesuai kebutuhan.',
    link: 'Klik Disini',
  },
  {
    heading: 'Spare-part.',
    slug: 'services', 
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph: 'Kami menyediakan berbagai spare-part original dan berkualitas tinggi untuk memastikan performa dan daya tahan perangkat.',
    link: 'Klik Disini',
  },
  {
    heading: 'Office.',
    slug: 'our-works',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph: 'Kami siap memberikan pelayanan terbaik mulai dari konsultasi produk hingga dukungan teknis. Kunjungi kantor kami untuk mendapatkan solusi yang cepat, tepat, dan terpercaya.',
    link: 'Klik Disni',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  // {
  //   section: 'Kontak',
  //   links: [
  //     { label: 'About Us', href: '#About' },
  //     { label: 'Team', href: '#Team' },
  //     { label: 'FAQ', href: '#FAQ' },
  //     { label: 'Blog', href: '#Blog' },
  //   ],
  // },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    FooterLinksData,
  })
}
