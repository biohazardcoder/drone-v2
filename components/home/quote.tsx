import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function QuoteSection() {
    return (
        <section className="w-full bg-[#1f1f1f] text-white py-16 md:py-24 px-4 md:px-10 lg:px-36">
            <div className="max-w-7xl mx-auto">
                <div className="mb-4 md:mb-6 inline-block border border-neutral-700 p-1">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="stroke-current text-neutral-300 md:w-12 md:h-12"
                    >
                        <path d="M9 11H5a3 3 0 0 1 3-3V6a5 5 0 0 0-5 5v7h6v-7Zm12 0h-4a3 3 0 0 1 3-3V6a5 5 0 0 0-5 5v7h6v-7Z" />
                    </svg>
                </div>

                <blockquote className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug md:leading-tight">
                    The hidden costs of poor documentation are time spent not building and
                    late nights in a conference room pointing fingers at each other.{" "}
                    <span className="text-yellow-400">
                        Those are the things we eliminate with reality capture and
                        DroneDeploy.
                    </span>
                </blockquote>

                <div className="mt-8 md:mt-10 flex items-center gap-3 md:gap-4">
                    <Avatar className="h-12 w-12 md:h-16 md:w-16">
                        <AvatarImage src="/joshua.jpg" alt="Joshua Weyand" />
                        <AvatarFallback>JW</AvatarFallback>
                    </Avatar>

                    <div>
                        <p className="font-medium text-lg md:text-2xl">
                            Joshua Weyand
                        </p>
                        <p className="text-xs md:text-sm text-neutral-400">
                            Director, Emerging Technologies
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
