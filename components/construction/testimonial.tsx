import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TestimonialHero() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="relative h-105">
          <Image
            src="/te.webp"
            alt="Customer testimonial"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex items-center bg-indigo-600 px-8 py-12 lg:px-16 col-span-3">
          <div className="max-w-xl text-white">
            <div className="mb-6  font-bold leading-none font-mono border-2 text-5xl pt-3 px-3 items-center justify-center border-secondary inline-block">
              <span className="w-full h-full flex items-center justify-center">“</span>
            </div>

            <p className="mb-6 text-2xl font-semibold">
              DroneDeploy provides the most comprehensive and holistic view of our
              project sites throughout the whole lifecycle. We finally have a
              single project management tool for all site documentation in one
              place.
            </p>

            <div className="mt-8">
              <p className="font-semibold">Austin Lay – STO Group</p>
              <p className="text-sm text-indigo-200">
                Reality Capture Manager
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-[#1f1f1f] px-8 py-10 lg:px-36">
        <h2 className="text-2xl font-semibold text-white">
          Try the platform yourself
        </h2>

        <Button
          size="lg"
          className="rounded-full bg-indigo-500 px-6 hover:bg-indigo-400"
        >
          Contact Sales
        </Button>
      </div>
    </section>
  )
}
