'use client'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { HeaderItem } from '@/app/types/menu'
import Link from 'next/link'

const AboutUsDetail = () => {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      <section id="about-section" className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.1]">
                Mitra Strategis Suku Cadang <br/>
                <span className="text-blue-600">Alat Berat & Pertambangan.</span>
              </h1>
              
              <div className="text-slate-700 text-2xl lg:text-3xl leading-relaxed font-medium italic">
                <p className="mb-4">
                  Perusahaan kami telah menjadi pilar utama dalam industri perdagangan suku cadang alat berat, marine, dan genset selama lebih dari 20 tahun.
                </p>
                <p>
                  Kami berdedikasi untuk memberikan produk berkualitas tinggi kepada seluruh konsumen dengan standar pelayanan terbaik serta harga yang kompetitif di pasar global.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-8 mt-12 pt-10 border-t border-slate-100">
                <div>
                  <p className="text-5xl font-bold text-slate-900 mb-1">20+</p>
                  <p className="text-2xl text-slate-500 font-medium uppercase tracking-widest">Tahun Beroperasi</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-slate-900 mb-1">20+</p>
                  <p className="text-2xl text-slate-500 font-medium uppercase tracking-widest">Partner</p>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Gambar Gedung */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-blue-100/50 rounded-[2.5rem] blur-2xl z-0"></div>
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-8 border-white">
                <Image 
                  src='/images/hero/logs2.png'
                  alt="Gedung PT. Cipta Semangat Maju" 
                  width={800}
                  height={1000}
                  className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VISI & MISI */}
      {/* Tambahkan id='vision-mission' jika ingin bisa diakses langsung via link */}
      <section id="vision-mission" className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Arah & Komitmen Kami
            </h2>
            <div className="h-2 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Card Visi */}
            <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-center transition-all hover:shadow-xl group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-blue-100 text-white group-hover:scale-110 transition-transform">
                <Icon icon="tabler:rocket" width="36" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-widest border-l-4 border-blue-600 pl-4">
                Visi
              </h3>
              <p className="text-slate-700 text-2xl lg:text-3xl leading-relaxed font-medium italic">
                "Menjadi Perusahaan dagang terpercaya yang mampu menyediakan produk berkualitas, layanan memuaskan dan solusi bisnis inovatif untuk memenuhi kebutuhan pelanggan."
              </p>
            </div>

            {/* Card Misi */}
            <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-sm border border-slate-100 group transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-blue-100 text-white group-hover:scale-110 transition-transform">
                <Icon icon="tabler:target-arrow" width="36" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-widest border-l-4 border-blue-600 pl-4">
                Misi Utama
              </h3>
              <div className="flex flex-col gap-8">
                {[
                  "Produk berkualitas dengan harga kompetitif",
                  "Solusi bisnis efektif bagi customer",
                  "Pengembangan bisnis berkelanjutan",
                  "Membangun tim solid & profesional"
                ].map((misi, i) => (
                  <div key={i} className="flex items-center gap-6 group/item">
                    <div className="flex-shrink-0 bg-blue-100 p-2 rounded-xl group-hover/item:bg-blue-600 transition-colors">
                      <Icon icon="tabler:check" className="text-blue-600 group-hover/item:text-white" width="24" />
                    </div>
                    <p className="text-xl lg:text-2xl font-semibold text-slate-700 group-hover/item:text-blue-600 transition-colors">
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOOTER CTA (Sekarang Aktif dengan ID) */}
      <section id="contact-section" className="py-20 text-center bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Siap Bekerja Sama dengan Kami?</h2>
          <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all hover:-translate-y-1">
            Hubungi Tim Kami
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AboutUsDetail