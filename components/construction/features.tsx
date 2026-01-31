import Image from "next/image"
import { Card } from "@/components/ui/card"

const features = [
    {
        number: "01",
        title: "Efficiency",
        description:
            "Automatically organize photos across the entire project lifecycle – from pre-con to close-out.",
    },
    {
        number: "02",
        title: "Visibility",
        description:
            "Keep a clear record of all structural elements, validate quality of work and detect issues early.",
    },
    {
        number: "03",
        title: "Communication",
        description:
            "Share annotated reports or 360 walkthroughs with your teams and trade partners in real-time.",
    },
    {
        number: "04",
        title: "Safety",
        description:
            "Inspect hard to reach areas, such as roofs and facades, without putting your teams at risk.",
    },
]

export function FeaturesSection() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                <div>
                    <h2 className="max-w-xl text-2xl md:text-4xl font-bold tracking-tight">
                        One platform for all your site and photo documentation
                    </h2>

                    <div className="mt-16 grid gap-12 sm:grid-cols-2">
                        {features.map((feature) => (
                            <Card
                                key={feature.number}
                                className="border-none bg-transparent p-0 shadow-none"
                            >
                                <span className="text-sm text-muted-foreground">
                                    {feature.number}
                                </span>

                                <div className="mt-4 h-px w-full bg-border" />

                                <h3 className="mt-6 text-2xl font-medium">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {feature.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="relative h-[80vh] w-full overflow-hidden">
                    <Image
                        src="/f1.webp"
                        alt="Construction worker using tablet"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

            </div>
        </section>
    )
}
