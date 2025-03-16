"use client"
import Image from 'next/image';

const Cook = () => {
    return (
        <section className='relative' id="tentang-section">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                {/* Gambar di pojok kanan bawah */}
                <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
                    <Image src={'/images/cook/baju.png'} alt="baju-image" width={463} height={622} />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 gap-8'>
                    {/* Gambar utama */}
                    <div className='col-span-6 flex justify-center lg:justify-start'>
                        <Image 
                            src="/images/cook/harum.png" 
                            alt="nothing" 
                            width={500} 
                            height={650} 
                            className='w-3/4 sm:w-full'
                        />
                    </div>

                    {/* Teks & tombol */}
                    <div className='col-span-6 flex flex-col justify-center text-center lg:text-start'>
                        <p className='text-primary text-base sm:text-lg font-normal mb-3 tracking-widest uppercase'>
                            Wash with Care
                        </p>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                            Cuci bersih tanpa merusak alam.
                        </h2>
                        <p className='text-black/50 dark:text-white/50 text-sm sm:text-base md:text-lg font-normal mb-6 mt-2'>
                            Kami percaya bahwa pakaian bersih tak harus mengorbankan lingkungan. Dengan formulasi ramah lingkungan, Gliso membersihkan noda membandel tanpa meninggalkan residu berbahaya.
                        </p>
                        <p className='text-black/50 dark:text-white/50 text-sm sm:text-base md:text-lg font-normal mb-8'>
                            Sebagai bagian dari komitmen kami terhadap keberlanjutan, Gliso menggunakan bahan-bahan alami yang biodegradable, menjaga kebersihan pakaian sekaligus merawat lingkungan.
                        </p>
                        <div className='flex justify-center lg:justify-start'>
                            <button className='text-base sm:text-xl font-medium rounded-full text-white py-4 sm:py-5 px-6 sm:px-10 bg-primary border border-primary hover:bg-transparent hover:text-primary'>
                                Pelajari
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cook;
