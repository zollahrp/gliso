"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const templateParams = {
            name: "Sobat Gliso",
            email: email,
        };
    
        try {
            await emailjs.send(
                "service_kopklle",
                "template_ih6cbza",
                templateParams,
                "mhuMofSkkJvPdDQw8"
            );
    
            Swal.fire({
                icon: "success",
                title: "Berhasil!",
                text: "Email berhasil dikirim!",
                confirmButtonColor: "#3085d6",
            });
    
            setEmail(""); // Reset input
        } catch (error) {
            console.error("Gagal mengirim email:", error);
    
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Gagal mengirim email, coba lagi!",
                confirmButtonColor: "#d33",
            });
        }
    };      

    return (
        <section className='relative'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="bg-primary rounded-Newsletter grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
                    <div className="col-span-7">
                        <div className="m-10 lg:ml-32 lg:mt-20 lg:mb-20">
                            <p className="text-lg font-normal text-white mb-3 ls-51"> NEWSLETTER </p>
                            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8">
                                Subscribe our <br /> newsletter.
                            </h2>

                            <form onSubmit={handleSubmit} className="relative flex flex-row-reverse shadow-fi rounded-full">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="py-6 sm:py-8 text-sm w-full text-black dark:text-white rounded-full pl-4 par-87 focus:outline-none focus:text-black"
                                    placeholder="@ enter your email-address"
                                    autoComplete="off"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <button type="submit" className="p-2 bg-gray-900 hover:scale-110 duration-300 rounded-full">
                                        <Icon icon="tabler:arrow-narrow-right" width="32" height="32" className="text-white" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-span-5 relative hidden md:block">
                        <div>
                            <Image src={'/images/Newsletter/soup.svg'} alt="soup-image" width={626} height={602} className='-mt-24' />
                        </div>
                        <div className="absolute top-[78%]">
                            <Image src={'/images/Newsletter/onion.svg'} alt="onion-image" width={300} height={122} />
                        </div>
                        <div className="absolute top-[30%] right-[-23%] hidden lg:block">
                            <Image src={'/images/Newsletter/lec.svg'} alt="lettuce-image" width={300} height={122} />
                        </div>
                        <div className="absolute bottom-[10%] left-[0%]">
                            <Image src={'/images/Newsletter/yellow.svg'} alt="yellow-image" width={59} height={59} />
                        </div>
                        <div className="absolute bottom-[20%] right-[20%]">
                            <Image src={'/images/Newsletter/blue.svg'} alt="blue-image" width={25} height={25} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
