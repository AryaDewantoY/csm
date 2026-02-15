import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    { title: "ENGINE BUSHING SET", desc: "Komponen silinder logam.", imgSrc: "/images/hero/1.png" },
    { title: "PISTON", desc: "Set komponen piston mesin.", imgSrc: "/images/hero/2.png" },
    { title: "CRANKSHAFT", desc: "Poros engkol mesin yang memanjang.", imgSrc: "/images/hero/3.png" },
    { title: "WATER PUMP REPAIR KIT", desc: "Set perlengkapan perbaikan pompa air.", imgSrc: "/images/hero/4.png" },
    { title: "CAM & LIFTER SET", desc: "Komponen noken as.", imgSrc: "/images/hero/5.png" },
    { title: "NOZZLE 7C-2238", desc: "Nozzle untuk sistem bahan bakar.", imgSrc: "/images/hero/6.png" },
    { title: "Seal GP 226-4755", desc: "Seal untuk sistem pengunci.", imgSrc: "/images/hero/8.png" },
    { title: "Kit - Bearing 353-2205", desc: "Set bearing untuk mesin.", imgSrc: "/images/hero/9.png" },
    { title: "Liner Cylind 523-8663", desc: "Liner silinder mesin.", imgSrc: "/images/hero/10.png" },
    { title: "Seal Lip Typ 166-1498", desc: "Seal lip untuk sistem pelumasan.", imgSrc: "/images/hero/11.png" },
    { title: "Valve 4W-5374", desc: "Valve untuk sistem pengaturan mesin.", imgSrc: "/images/hero/12.png" }
  ];

  return (
    <div className="container mx-auto px-4 py-20 mt-10">
      <h1 className="text-3xl font-bold text-center mb-10">Our Services & Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
          >
            {/* Container Gambar */}
            <div className="relative w-full h-56 mb-6 overflow-hidden rounded-lg bg-slate-50">
              <Image 
                src={service.imgSrc} 
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                priority={index < 3}
              />
            </div>

            {/* Teks */}
            <h3 className="font-bold text-xl mb-2 text-slate-800">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}