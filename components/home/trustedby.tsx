"use client"

const logos = [
    { name: "Artel", src: "/t1.png" },
    { name: "Imzo", src: "/imzo.png" },
    { name: "Akfa", src: "/akfa.png" },
    { name: "Uztelecom", src: "/uztelecom.png" },
    { name: "Huawei", src: "/huawei.png" },
    { name: "Ozmet", src: "/ozmet.png" },
    { name: "SQB", src: "/sqb.webp" },
    { name: "Uzum", src: "/uzum.png" },
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
                            className="flex items-center justify-center "
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className={`grayscale object-cover object-center`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
