'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  const leftAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  const rightAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section className='relative overflow-hidden z-1'>
      <div className='container mx-auto pt-24 max-w-7xl px-4'>
        <div className='grid grid-cols-12 justify-center items-center'>
          <div className='col-span-12 xl:col-span-5 lg:col-span-6 md:col-span-12 sm:col-span-12'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900'>
              Membantu Kebutuhan Anda dengan Layanan Luar Biasa.
            </h1>
          </div>
          <div className='xl:col-span-7 lg:col-span-6 lg:block hidden rounded-2xl overflow-hidden bg-white shadow-[0_20px_30px_rgba(8,_100,_184,_0.7)] border border-gray-50 p-8 relative'>
            <Image
              src='/images/hero/logg1.png'
              alt='banner image'
              width={600}
              height={600}
              className='w-full'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
