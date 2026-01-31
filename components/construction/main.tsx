import { Button } from "@/components/ui/button"

export default function Main() {
    return (
        <main className="relative flex flex-col min-h-screen py-20 items-center justify-center  bg-[#3f48e9]">
            <div className="pointer-events-none absolute z-30  inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.5)_1px,transparent_0)] bg-size-[40px_40px]" />

            <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
                <p className="mb-4 text-sm font-medium uppercase tracking-wide text-white/80">
                    Reality capture software for construction
                </p>

                <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                    Build with certainty
                </h1>

                <p className="mx-auto mb-8 max-w-2xl text-base text-white/90 sm:text-lg">
                    Automate site inspections, track construction projects, and centralize
                    visual data — all in one platform.
                </p>

                <Button
                    size="lg"
                    variant={"secondary"}
                    className="rounded-full"
                >
                    Get a Demo
                </Button>
            </div>
            <div className="z z-50">
                <video src="/c1.mp4" autoPlay muted loop className="object-cover w-10/12 mx-auto md:w-240 mt-20" />
            </div>
        </main>
    )
}
