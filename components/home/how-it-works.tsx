export default function HowItWorks() {
    return (
        <div className=" py-8">
            <section className="w-full bg-white">
                <div className="mx-auto max-w-7xl px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                            <span className="text-xs md:text-sm font-medium text-neutral-700">
                                How it works
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-neutral-900 leading-tight mb-4">
                            Every site, fully <br className="hidden md:block" /> captured
                        </h2>

                        <p className="text-base sm:text-lg md:text-2xl font-medium text-neutral-900 mb-4 md:pr-24">
                            Robotic automation or capture services, we've got you covered.
                        </p>

                        <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-md">
                            Hundreds of workers. Thousands of tasks. How do you capture utilities
                            before they're buried, in-slab plumbing before you pour, and in-wall
                            electrical before you close up? DroneDeploy lets you see it all.
                        </p>
                    </div>

                    <div className="relative w-full p-0 py-2 md:p-10 md:bg-secondary h-55 sm:h-75 md:h-105 overflow-hidden ">
                        <video
                            src="/h1.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full bg-white">
                <div className="mx-auto max-w-7xl px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="relative w-full p-0 py-2 md:p-10 md:bg-secondary h-55 sm:h-75 md:h-105 overflow-hidden ">
                        <video
                            src="/h2.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="order-1 lg:order-2 lg:pl-16">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                            <span className="text-xs md:text-sm font-medium text-neutral-700">
                                How it works
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-neutral-900 leading-tight mb-4">
                            One login for 360, <br className="hidden md:block" />
                            drone, site cam and <br className="hidden md:block" />
                            design data
                        </h2>

                        <p className="text-base sm:text-lg md:text-2xl font-medium text-neutral-900 mb-4">
                            Unified reality capture for full lifecycle visibility.
                        </p>

                        <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-md">
                            View your sites and assets from every angle, over time. Compare your
                            designs with 2D maps, 3D models, meshes and pointclouds.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white">
                <div className="mx-auto max-w-7xl px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 ">
                    <div className="py-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                            <span className="text-xs md:text-sm font-medium text-neutral-700">
                                How it works
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-neutral-900 leading-tight mb-4">
                            Real AI that <br className="hidden md:block" />
                            understands your <br className="hidden md:block" />
                            site
                        </h2>

                        <p className="text-base sm:text-lg md:text-2xl font-medium text-neutral-900 mb-4">
                            From AI models trained on the largest collection of geolocated imagery.
                        </p>

                        <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-md">
                            Supercharge your staff with quality, safety, and progress tracking
                            powered by DroneDeploy's domain-specific AI.
                        </p>
                    </div>

                    <div className="relative w-full p-0 py-2 md:p-10 md:bg-secondary h-55 sm:h-75 md:h-105 overflow-hidden ">
                        <video
                            src="/h3.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
