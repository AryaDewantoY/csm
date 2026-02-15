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
  { label: 'About Us', href: '/#about-section' }, // Tambahkan / sebelum #
  { label: 'Store', href: '/#team-section' },    // Sesuaikan ID dengan yang ada di Home
  { label: 'Partnership', href: '/#client-section' },
]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'About Us.',
    slug: 'about-us', 
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    link: 'Learn more',
  },
  {
    heading: 'Spare-part.',
    slug: 'services', 
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    link: 'Learn more',
  },
  {
    heading: 'Office.',
    slug: 'our-works',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    link: 'Learn more',
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
