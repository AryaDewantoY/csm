import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
   <section id="team-section" className="bg-cover bg-center overflow-hidden">
  <div className='container mx-auto max-w-7xl px-4 relative py-10 md:py-20'> {/* Tambahkan padding vertical */}
    
    {/* Heading dengan tracking tight agar lebih modern */}
    <h2 className='text-center max-w-4xl mx-auto leading-tight tracking-tight'>
      Gudang Modern & Tim Profesional untuk Layanan Terbaik
    </h2>
    
    {/* Subtitle dengan warna yang lebih terbaca dan line-height yang pas */}
    <p className='text-center pt-6 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed'>
      Kami berdedikasi untuk memberikan layanan prima dengan dukungan tim ahli dan infrastruktur pergudangan yang modern untuk menjamin ketersediaan kebutuhan Anda.
    </p>

    {/* Container Gambar dengan efek Shadow dan Hover */}
    <div className='mt-16 relative group'>
      {/* Dekorasi Aksen (Opsional) */}
      <div className='absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all'></div>
      
      <Image
        src='/images/team/warehouse.png'
        alt='warehouse-image'
        height={684}
        width={1296}
        className='relative z-1 rounded-[2rem] shadow-2xl border border-slate-200 object-cover transition-transform duration-700 group-hover:scale-[1.01]'
      />
      
      {/* Overlay halus agar gambar terlihat lebih premium */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-2 rounded-[2rem] pointer-events-none'></div>
    </div>

  </div>
</section>
  )
}

export default Team
