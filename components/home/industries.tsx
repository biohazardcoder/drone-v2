"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const industries = [
    {
        title: "Construction",
        image: "/industry1.avif",
        href: "/industries/construction",
    },
    {
        title: "Owners",
        image: "/industry2.avif",
        href: "/industries/owners",
    },
    {
        title: "Oil & Gas",
        image: "/industry3.avif",
        href: "/industries/oil-gas",
    },
    {
        title: "Agriculture",
        image: "/industry4.avif",
        href: "/industries/agriculture",
    },
]

export const IndustriesSection = () => {
    return (
        <section className="relative w-full bg-transparent py-16 md:py-24">
            <div className="absolute top-0 left-0 h-[50%] md:h-[60%] w-full bg-[#1f1f1f] z-0" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
                <h2 className="mb-10 md:mb-14 text-center text-xl md:text-3xl font-semibold text-white">
                    <span className="text-amber-400">Don't get left behind.</span>{" "}
                    See how your industry is capturing.
                </h2>

                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {industries.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="group relative overflow-hidden rounded-xs
                         h-55 sm:h-65 lg:h-70"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       25vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/60" />

                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                <h3 className="text-lg sm:text-xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center
                                 rounded-full bg-white/10 backdrop-blur
                                 transition group-hover:bg-white/20">
                                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
