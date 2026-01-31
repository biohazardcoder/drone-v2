"use client"

import Image from "next/image"

const logos = [
    { name: "Syngenta", src: "/trusted1.avif" },
    { name: "Corteva", src: "/trusted2.avif" },
    { name: "CHS", src: "/trusted3.avif" },
    { name: "ScottsMiracleGro", src: "/trusted4.avif" },
    { name: "ScottsMiracleGro", src: "/trusted5.avif" },
    { name: "Bayer", src: "/trusted6.avif" },
    { name: "Advanta", src: "/trusted7.avif" },
    { name: "Monrovia", src: "/trusted8.avif" },
]

export const TrustedBy = () => {
    return (
        <section className="w-full bg-[#1f1f1f] py-12 md:py-20">
            <div className="mx-auto max-w-4xl px-4 md:px-6">
                <h2 className="mb-10 text-center text-xl font-semibold text-white md:text-2xl">
                    Trusted by the people who{" "}
                    <span className="text-amber-400">feed</span> our world
                </h2>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 md:gap-10">
                    {logos.map((logo, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center opacity-80 transition hover:opacity-100"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={160}
                                height={80}
                                sizes="(max-width: 640px) 120px, 160px"
                                className="h-8 sm:h-10 md:h-12 w-auto object-contain grayscale"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
