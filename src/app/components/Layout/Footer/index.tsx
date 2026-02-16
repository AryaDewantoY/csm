'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { footerlinks } from '@/app/types/footerlinks'

const Footer = () => { // Gunakan PascalCase untuk nama komponen
  const [footerlinks, setFooterLinks] = useState<footerlinks[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLinks(data.FooterLinksData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='bg-black' id='first-section'>
      {/* 1. PERBAIKAN PADDING: pt-48 diubah menjadi pt-16 (mobile) dan lg:pt-32 (desktop) */}
      <div className='container mx-auto max-w-7xl pt-12 pb-10 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8'>
          
          {/* COLUMN-1 */}
          <div className='col-span-4'>
            {/* 2. PERBAIKAN FONT: text-3xl diubah menjadi text-xl (mobile) agar tidak pecah baris terlalu banyak */}
            <h4 className='text-white text-xl md:text-2xl font-bold leading-tight mb-6 lg:mb-10 uppercase'>
              PT. CIPTA SEMANGAT MAJU <br />
              <span className='text-sm font-normal text-gray-400'>PART & SUPPLIES</span>
            </h4>
            
            <div className='flex items-center gap-4'>
              <div className='footer-icons'>
                <Link href='https://facebook.com'>
                  <Image src={'/images/footer/vec.svg'} alt='facebook' width={15} height={20} />
                </Link>
              </div>
              <div className='footer-icons'>
                <Link href='https://twitter.com'>
                  <Image src={'/images/footer/twitter.svg'} alt='twitter' width={25} height={20} />
                </Link>
              </div>
              <div className='footer-icons'>
                <Link href='https://instagram.com'>
                  <Image src={'/images/footer/instagram.svg'} alt='instagram' width={25} height={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* COLUMN-2/3 */}
          {footerlinks.map((item, i) => (
            <div key={i} className='col-span-2'>
              {/* 3. PERBAIKAN MARGIN: mb-9 diubah menjadi mb-5 agar lebih rapat */}
              <p className='text-white text-lg font-bold mb-5'>
                {item.section}
              </p>
              <ul>
                {item.links.map((link, j) => (
                  <li key={j} className='mb-3'>
                    <Link
                      href={`${link.href}`}
                      className='text-gray-300 text-base font-normal hover:text-white hover:underline transition-all'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className='mx-auto max-w-7xl border-t border-white/10'>
        <div className='py-6 px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-center md:text-start text-gray-400 text-sm'>
              @2026 - PT. CIPTA SEMANGAT MAJU
            </p>
            <div className='flex justify-center md:justify-end'>
              {/* Tempat untuk Privacy Policy jika diperlukan */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;