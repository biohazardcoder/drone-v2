"use client"

import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

type Project = {
    id: number
    image: string
    contractor: string
    title: string
    location: string
    sqft: string
    views?: number
    photos?: number
}

const projects: Project[] = [
    {
        id: 1,
        image: "/s1.avif",
        contractor: "PCL Construction",
        title: "CAMH Redevelopment",
        location: "Ontario, CA",
        sqft: "600,000",
        views: 42,
        photos: 45086,
    },
    {
        id: 2,
        image: "/s2.avif",
        contractor: "CORE Construction",
        title: "Emerson High School",
        location: "Frisco, TX",
        sqft: "380,000",
        views: 20,
        photos: 9062,
    },
    {
        id: 3,
        image: "/s3.avif",
        contractor: "Messer Construction Co.",
        title: "Belknap Residence Hall",
        location: "Louisville, KY",
        sqft: "130,225",
        views: 10,
        photos: 10428,
    },
    {
        id: 4,
        image: "/s4.avif",
        contractor: "Shawmut Design and Construction",
        title: "Langham Hotel Renovation",
        location: "Boston, MA",
        sqft: "288,000",
        views: 30,
        photos: 12468,
    },
]

export function ProjectSpotlight() {
    return (
        <section className="w-full max-w-7xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-semibold mb-8">
                Project Spotlight
            </h2>

            <Carousel
                opts={{ align: "start" }}
                className="relative"
            >
                <CarouselContent>
                    {projects.map((project) => (
                        <CarouselItem
                            key={project.id}
                            className="md:basis-4/5 lg:basis-3/4"
                        >
                            <Card className="overflow-hidden border rounded-none py-0 gap-0 bg-muted">
                                <div className="relative h-105 w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <div className="grid md:grid-cols-3  p-6 bg-background">
                                    <div className="md:col-span-2 space-y-2">
                                        <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                            {project.contractor}
                                        </p>
                                        <h3 className="text-2xl font-semibold">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Location: {project.location}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Property sq ft: {project.sqft}
                                        </p>
                                    </div>

                                    {(project.views || project.photos) && (
                                        <div className="flex flex-col justify-center gap-2  md:border-l md:pl-6 mt-2 md:mt-0">
                                            {project.views && (
                                                <div className="text-sm">
                                                    <span className="font-medium">Total Views:</span>{" "}
                                                    {project.views}
                                                </div>
                                            )}
                                            {project.photos && (
                                                <div className="text-sm">
                                                    <span className="font-medium">Total Photos:</span>{" "}
                                                    {project.photos.toLocaleString()}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
