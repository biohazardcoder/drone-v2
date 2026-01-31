import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function RequestDemoPage() {
    return (
        <div className="min-h-[80vh] bg-[#1f1f1f] text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 pt-0 py-8 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Getting <br /> started <br />
                        is simple.
                    </h1>
                    <p className="mt-2 text-5xl  md:text-6xl font-semibold text-yellow-400">
                        Request a <br /> demo today.
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label className="text-sm text-neutral-300">
                                Business Email *
                            </label>
                            <Input
                                type="email"
                                className="mt-2 bg-transparent text-white rounded-none border-muted-foreground"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-neutral-300">
                                Job Title *
                            </label>
                            <Input
                                type="text"
                                className="mt-2 bg-transparent text-white rounded-none border-muted-foreground"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-neutral-300">
                            Message *
                        </label>
                        <Textarea
                            className="mt-2 min-h-30 bg-transparent text-white rounded-none border-muted-foreground"
                            placeholder="Please share additional context so we can route your request to the right person"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-neutral-300">
                            How did you hear about us? *
                        </label>
                        <Textarea
                            className="mt-2 min-h-30 bg-transparent text-white rounded-none border-muted-foreground"
                            placeholder="Please provide as much detail as possible"
                        />
                    </div>

                    <p className="text-sm text-neutral-400">
                        By submitting, you confirm that you have reviewed DroneDeploy’s{" "}
                        <Link href="#" className="text-blue-400 underline">
                            Privacy  Policy
                        </Link>{" "}
                        and agree to its terms.
                    </p>

                    <Button
                        type="submit"
                        className="rounded-full bg-yellow-400 px-8 py-6 text-black hover:bg-yellow-300"
                    >
                        Book a demo
                    </Button>
                </form>
            </div>
        </div>
    )
}
