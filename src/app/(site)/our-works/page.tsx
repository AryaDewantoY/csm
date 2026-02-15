import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function OurWorksPage() {
  return (
    <main className="py-20 bg-white dark:bg-darkmode min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 mt-4 text-slate-900 dark:text-white leading-tight">
            Office <span className="text-primary italic">Kami.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            Intip beberapa proyek terpilih yang telah kami kerjakan dengan presisi dan dedikasi penuh untuk mendukung kebutuhan industri Anda.
          </p>
        </div>

        {/* GRID WORKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* PROJECT 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[16/10] bg-slate-100 rounded-[2.5rem] overflow-hidden mb-8 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3">
               {/* Gunakan Image asli jika sudah ada path-nya */}
               <div className="absolute inset-0 bg-slate-200 group-hover:scale-110 transition-transform duration-700 bg-[url('/images/team/warehouse.png')] bg-cover bg-repeat bg-center"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <div className="text-white">
                    <span className="bg-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Infrastruktur</span>
                  </div>
               </div>
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Proyek Infrastruktur Modern</h3>
                <p className="text-slate-500 mt-3 leading-relaxed">Penyelesaian sistem tata kelola gedung komersial dengan integrasi teknologi terbaru.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Icon icon="lucide:arrow-up-right" width="24" />
              </div>
            </div>
          </div>
          
          {/* PROJECT 2 */}
          <div className="group cursor-pointer md:mt-16">
            <div className="relative aspect-[16/10] bg-slate-100 rounded-[2.5rem] overflow-hidden mb-8 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3 border border-slate-100 dark:border-slate-800">
               <div className="absolute inset-0 bg-slate-300 group-hover:scale-110 transition-transform duration-700 bg-[url('/images/team/office.png')] bg-contain bg-repeat bg-center m-10"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Optimasi Layanan</h3>
                <p className="text-slate-500 mt-3 leading-relaxed">Implementasi efisiensi operasional berbasis real time untuk meningkatkan produktivitas tim.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Icon icon="lucide:arrow-up-right" width="24" />
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER CALL TO ACTION
        <div className="mt-32 p-12 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <Icon icon="bi:quote" width="120" className="text-white rotate-180" />
           </div>
           <h4 className="text-3xl font-bold text-white mb-6 relative z-10">Punya proyek besar berikutnya?</h4>
           <button className="bg-primary hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/30 relative z-10">
              Mulai Diskusi
           </button>
        </div> */}
      </div>
    </main>
  );
}