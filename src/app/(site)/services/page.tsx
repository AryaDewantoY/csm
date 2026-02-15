// Import di bagian paling atas file
import Logo1 from '/public/images/hero/1.png';
import Logo2 from '/public/images/hero/2.png';
import Logo3 from '/public/images/hero/3.png';
import Logo4 from '/public/images/hero/4.png';
import Logo5 from '/public/images/hero/5.png';
import Logo6 from '/public/images/hero/6.png';
import Logo7 from '/public/images/hero/8.png';
import Logo8 from '/public/images/hero/9.png';
import Logo9 from '/public/images/hero/10.png';
import Logo10 from '/public/images/hero/11.png';
import Logo11 from '/public/images/hero/12.png';

import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    { title: "ENGINE BUSHING SET", desc: "Komponen silinder logam.", imgSrc: Logo1 },
    { title: "PISTON", desc: "Set komponen piston mesin.", imgSrc: Logo2 },
    { title: "CRANKSHAFT", desc: "Poros engkol mesin yang memanjang.", imgSrc: Logo3 },
     { title: "WATER PUMP REPAIR KIT", desc: "Set perlengkapan perbaikan pompa air.", imgSrc: Logo4 },
    { title: "CAM & LIFTER SET", desc: "Komponen noken as.", imgSrc: Logo5 },
    { title: "NOZZLE 7C-2238", desc: "Nozzle untuk sistem bahan bakar.", imgSrc: Logo6 },
     { title: "Seal GP 226-4755", desc: "Seal untuk sistem pengunci.", imgSrc: Logo7 },
    { title: "Kit - Bearing 353-2205", desc: "Set bearing untuk mesin.", imgSrc: Logo8 },
    { title: "Liner Cylind 523-8663", desc: "Liner silinder mesin.", imgSrc: Logo9 },
    { title: "Seal Lip Typ 166-1498", desc: "Seal lip untuk sistem pelumasan.", imgSrc: Logo10 },
    { title: "Valve 4W-5374", desc: "Valve untuk sistem pengaturan mesin.", imgSrc: Logo11 }
  ];
  return (
    <main className="py-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-blue-600 font-bold mb-2 mt-6">PRODUK</h2>
        <h1 className="text-4xl font-bold text-slate-900 mb-12">Solusi Lengkap untuk Kebutuhan Anda</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group text-left">
              <Image 
                src={s.imgSrc} 
                alt={s.title} 
                width={100} 
                height={100} 
                className="mb-6 rounded-2xl group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}