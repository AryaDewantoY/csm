"use client";
import { useEffect, useState } from "react";
import { aboutdata } from "@/app/types/aboutdata";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import AboutSkeleton from "../../Skeleton/AboutUs";
import { HeaderItem } from "@/app/types/menu";

const Aboutus = () => {
  const [about, setAbout] = useState<aboutdata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setAbout(data.Aboutdata);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <section id="About-section" className="bg-cover bg-center overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 relative z-1">
        <div className="p-12 bg-grey rounded-3xl">
          <Image
            src="/images/aboutus/dots.svg"
            width={100}
            height={100}
            alt="dots-image"
            className="absolute bottom-1 -left-20"
          />
          <h2 className="text-center pb-12 text-3xl font-bold">
            Kami Adalah Mitra Terpercaya untuk Kebutuhan Alat Berat.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <AboutSkeleton key={index} />
                ))
              : about.map((item, i) => (
                  <div
                    key={i}
                    className="hover:bg-darkmode bg-white rounded-3xl p-8 shadow-xl group transition-all duration-300 flex flex-col h-full"
                  >
                    <h5 className="group-hover:text-white mb-5 text-xl font-semibold">
                      {item.heading}
                    </h5>

                    <div className="relative w-full h-48 mb-6 bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.imgSrc}
                        alt={item.heading}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <p className="text-lg font-normal text-black group-hover:text-white mb-5 flex-grow">
                      {item.paragraph}
                    </p>

                    <Link
                      href={`/${item.slug || ""}`}
                      className="text-18 font-semibold text-primary hover-underline flex items-center group-hover:text-white transition-colors mt-auto"
                    >
                      {item.link || "Learn More"}
                      <Icon
                        icon="tabler:chevron-right"
                        width="20"
                        height="20"
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
