"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const items = [
    { title: "Precon Manager’s Guide to Site Documentation", tag: "Document", image: "/l1.webp" },
    { title: "DPR Construction’s Digital Dig Board", tag: "Video", image: "/l2.webp" },
    { title: "Why the best witness on your jobsite is the camera", tag: "Video", image: "/l3.webp", featured: true },
    { title: "The Bid Walk: Drone Mapping", tag: "Video", image: "/l4.webp" },
    { title: "Before the Build: Pre-Mobilization", tag: "Video", image: "/l5.webp" },
    { title: "Why the best witness on your jobsite is the camera", tag: "Video", image: "/l6.webp", featured: true },
]

export default function LearnSection() {
    const [index, setIndex] = useState(0)

    return (
        <section className="w-full bg-[#1f1f1f] text-white py-20 lg:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4 lg:mb-6">
                            <span className="h-3 w-3 rounded-full bg-blue-600" />
                            <span className="text-sm text-neutral-300">
                                Education and entertainment
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
                            Learn how the best are <br className="hidden lg:block" /> using DroneDeploy
                        </h2>

                        <p className="text-neutral-400 max-w-xl text-sm sm:text-base">
                            Discover use cases. Watch virtual events. Download playbooks. And
                            get to know our team through our content.
                        </p>
                    </div>

                    <Button className="self-start bg-blue-600 hover:bg-blue-500 rounded-full px-6">
                        Start streaming
                    </Button>
                </div>

                <div className="relative mt-12">
                    <div className="hidden justify-end items-center gap-2 mb-6">
                        <Button
                            onClick={() => setIndex(Math.max(index - 1, 0))}
                            size="icon"
                            className="border border-muted-foreground rounded-full bg-white/10"
                        >
                            <ChevronLeft />
                        </Button>

                        <div className="flex gap-2 bg-white/10 px-4 py-4 rounded-full border border-muted-foreground">
                            {items.slice(0, 3).map((_, i) => (
                                <span
                                    key={i}
                                    className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>

                        <Button
                            onClick={() => setIndex(Math.min(index + 1, items.length - 4))}
                            size="icon"
                            className="border border-muted-foreground rounded-full bg-white/10"
                        >
                            <ChevronRight />
                        </Button>
                    </div>
                    <div
                        className="
                            grid grid-cols-1 md:flex gap-4 sm:gap-6
                            overflow-x-auto lg:overflow-hidden
                            snap-x snap-mandatory
                            lg:transition-transform lg:duration-500
                            "
                        style={{
                            transform: `translateX(-${index * 320}px)`,
                        }}
                    >
                        {items.map((item, i) => (
                            <div
                                key={i}
                                className={`
                                relative snap-start shrink-0
                                min-w-65 h-90
                                sm:min-w-70 sm:h-100
                                lg:min-w-75 lg:h-105
                                overflow-hidden
                                ${item.featured ? "bg-black" : "bg-neutral-800"}
                                `}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-[#1f1f1f] via-black/30 to-transparent" />

                                <div className="absolute bottom-5 left-5 right-5">
                                    <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full bg-white/10">
                                        {item.tag}
                                    </span>

                                    <h3 className="font-semibold leading-snug text-sm sm:text-base">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm flex items-center gap-1 text-yellow-400">
                                        Watch now <ChevronRight size={18} className="mt-1" />
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
