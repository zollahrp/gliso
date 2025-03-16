"use client";
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home-section" className="bg-gray-50 dark:bg-gray-700">
      <div className="container mx-auto max-w-screen-xl px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          {/* Bagian Teks */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-5 text-black dark:text-white">
              Bersih Maksimal, Limbah Minimal
            </h1>
            <p className="text-black/55 dark:text-white/50 text-sm md:text-lg font-normal mb-10 text-center lg:text-left">
                Detergen pertama dengan kombinasi bahan ramah lingkungan. <br />
                Efektif menghilangkan noda, membasmi bakteri, dan lembut di kulit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="#cook-section"
                className="text-xl font-medium rounded-full text-white py-4 px-6 bg-primary hover:text-primary border border-primary hover:bg-transparent text-center sm:w-auto"
              >
                Pesan Sekarang
              </Link>
              <Link
                href="#about-section"
                className="border border-primary rounded-full text-xl font-medium items-center py-4 px-10 text-primary hover:text-white hover:bg-primary text-center sm:w-auto"
              >
                Jelajahi
              </Link>
            </div>
          </div>

          {/* Bagian Gambar */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Bubble Text */}
            <div className="hidden sm:flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute shadow-md">
              <Image src={'/images/hero/cuci.svg'} alt="cuci-image" width={50} height={50} />
              <p className="text-lg font-normal">
                Cleaning Smarter, <br /> Living Greener.
              </p>
            </div>
            <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-none">
              <Image
                src="/images/hero/banner-image.png"
                alt="nothing"
                width={1000}
                height={805}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
