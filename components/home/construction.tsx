"use client"

import { useState } from "react"

const steps = [
    {
        id: "pre",
        title: "Pre-construction",
        description:
            "Document existing conditions and logistics to improve bidding accuracy, stakeholder alignment, and team readiness before mobilization.",
        video: "/pre-construction.mp4",
    },
    {
        id: "earth",
        title: "Earthworks",
        description:
            "Track cut/fill progress with high-resolution site maps, ensuring accurate quantities and efficient planning for every phase.",
        video: "/earthworks.mp4",
    },
    {
        id: "underground",
        title: "Underground utilities",
        description:
            "Capture underground installations to validate placement, prevent disputes, and document work before it’s covered.",
        video: "/underground.mp4",
    },
    {
        id: "exterior",
        title: "Exterior",
        description:
            "Monitor framing, waterproofing and facade installations with automated drone captures to enhance safety and streamline quality checks.",
        video: "/exterior.mp4",
    },
    {
        id: "interior",
        title: "Interior",
        description:
            "Inspect framing, MEP rough-ins and finishes to avoid rework and maintain transparency on what’s behind the walls.",
        video: "/interior.mp4",
    },
    {
        id: "closeout",
        title: "Closeout",
        description:
            "Deliver complete project documentation with organized site records, reducing turnover issues and improving owner confidence.",
        video: "/closeout.mp4",
    },
    {
        id: "ops",
        title: "Operations & maintenance",
        description:
            "Maintain asset value with up-to-date digital records, enabling efficient inspections and long-term facilities management.",
        video: "/operations.mp4",
    },
]

export const ConstructionWorkflow = () => {
    const [active, setActive] = useState(0)

    return (
        <section className="w-full bg-white py-16 md:py-24 px-4 md:px-38">
            <p className="flex items-center gap-2 font-mono text-xs md:text-sm">
                <span className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-blue-700" />
                Don’t just trust that work is going to plan
            </p>

            <h1 className="mt-4 text-2xl md:text-5xl font-semibold text-zinc-900">
                Get an unbiased view of <br className="hidden md:block" />
                all your sites at any phase
            </h1>

            <div className="mx-auto mt-10 md:mt-16 max-w-7xl">
                <div className="grid gap-8 md:gap-12 lg:grid-cols-[260px_1fr]">
                    <div className="relative">
                        <div className="absolute -left-3.5 top-0 hidden h-full w-px bg-zinc-200 lg:block" />

                        <ul className="flex gap-4 flex-wrap  pb-2
                           lg:block lg:space-y-6 lg:overflow-visible">
                            {steps.map((step, index) => (
                                <li
                                    key={step.id}
                                    onClick={() => setActive(index)}
                                    className={`relative cursor-pointer whitespace-nowrap
                    text-xs md:text-base lg:text-xl font-semibold transition
                    ${index === active
                                            ? "text-zinc-900"
                                            : "text-zinc-400 hover:text-zinc-600"
                                        }`}
                                >
                                    <span
                                        className={`absolute -left-4 top-0 hidden h-full w-1 bg-blue-500 lg:block
                    ${index === active ? "opacity-100" : "opacity-0"}`}
                                    />
                                    {step.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative overflow-hidden rounded-md">
                        <video
                            key={steps[active].video}
                            loop
                            autoPlay
                            muted
                            playsInline
                            src={steps[active].video}
                            className="h-55 sm:h-75 md:h-105 w-full object-cover"
                        />

                        {steps[active].description && (
                            <div className="absolute bottom-3 left-3 right-3
                              md:left-4 md:right-auto
                              max-w-full md:max-w-xs
                              rounded-sm bg-black/80 p-3 md:p-4 text-white">
                                <p className="text-xs md:text-sm leading-relaxed">
                                    {steps[active].description}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
