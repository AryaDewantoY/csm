'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { Icon } from '@iconify/react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TestimonialType {
  name: string
  profession: string
  comment: string
  imgSrc: string
  // rating: number
}

// 2. DATA TEMPLATE (Ganti isi ini sesuai kebutuhan)
const testimonialsData: TestimonialType[] = [
  {
    name: " PT. Sillo Maritime Perdana Tbk",
    profession: " Jasa pelayaran",
    comment: "Kualitas suku cadang dari PT. Cipta Semangat Maju sangat luar biasa. Durabilitasnya membantu kami menekan biaya maintenance.",
    imgSrc: "/images/aboutus/imgOne.svg", 

  },
  {
    name: "PT. Wijaya Bangun Rigutama ",
    profession: "Jasa Pengeboran",
    comment: "Pengiriman cepat dan respon tim sangat teknis. Sangat membantu dalam mencari part yang spesifik untuk alat berat kami.",
    imgSrc: "/images/aboutus/imgTwo.svg",
   
  },
  {
    name: "PT. Plumpang Raya Anugerah",
    profession: "pengeboran minyak dan gas maupun panas bumi",
    comment: "Produk orisinil dan sesuai spesifikasi. Sudah menjadi mitra langganan kami selama lebih dari 2 tahun.",
    imgSrc: "/images/aboutus/imgThree.svg",

  },
  {
    name: "PT. Asrindo Citra Seni",
    profession: "Minyak Dan Gas",
    comment: "Kualitas suku cadang dari PT. Cipta Semangat Maju sangat luar biasa. Durabilitasnya membantu kami menekan biaya maintenance.",
    imgSrc: "/images/aboutus/imgOne.svg", 

  },
  {
    name: "PT. Bangun Mitra Sinergi",
    profession: "Kontraktor Sipil",
    comment: "Pengiriman cepat dan respon tim sangat teknis. Sangat membantu dalam mencari part yang spesifik untuk alat berat kami.",
    imgSrc: "/images/aboutus/imgTwo.svg",
   
  },
  {
    name: "PT. Suasa Benua Sukses",
    profession: "Jasa pelayaran Minyak Dan Gas",
    comment: "Produk orisinil dan sesuai spesifikasi. Sudah menjadi mitra langganan kami selama lebih dari 2 tahun.",
    imgSrc: "/images/aboutus/imgThree.svg",

  }
]

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  cssEase: 'ease-in-out',
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
}

const TestimonialCard: React.FC<{ items: TestimonialType }> = ({ items }) => {
  return (
    <section id="client-section" className="bg-cover bg-center overflow-hidden">
    <div className='relative py-10 px-3 h-full'> 
      <div className='bg-white dark:bg-darkmode rounded-[2rem] p-8 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col h-full min-h-[350px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group'>
        
        <div className='flex items-center gap-4 mb-6'>
          <div className='relative w-[65px] h-[65px] ring-4 ring-primary/10 rounded-full overflow-hidden flex-shrink-0'>
            <Image
              src={items.imgSrc}
              alt={items.name}
              fill
              className='object-cover'
            />
          </div>
          <div className='overflow-hidden'>
            <p className='text-lg font-bold text-slate-900 dark:text-white leading-tight truncate'>
              {items.name}
            </p>
            <p className='text-sm font-medium text-primary uppercase tracking-wider truncate'>
              {items.profession}
            </p>
          </div>
        </div>

        <div className='relative flex-grow'>
          <Icon icon="bi:quote" className="absolute -top-2 -left-2 text-slate-100 dark:text-slate-800 rotate-180" width="40" />
          <p className='relative z-1 text-slate-600 dark:text-slate-300 italic leading-relaxed pt-2'>
            "{items.comment}"
          </p>
        </div>
      </div>
    </div>
    </section>
  )
}

const Testimonial: React.FC = () => {
  return (
    <section className="bg-white dark:bg-darkmode relative py-20 overflow-hidden" id='testimonial-section'>
      <div className='container mx-auto max-w-7xl px-4 relative z-10'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl md:text-5xl font-bold text-slate-900 dark:text-white'>
            Partnership
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className='mt-10'>
          <Slider {...settings}>
            {testimonialsData.map((items, i) => (
              <TestimonialCard key={i} items={items} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;