
export const Demo = () => {
    return (
        <div>
            <section className="bg-indigo-600 flex flex-col md:flex-row md:items-center justify-between px-6 py-16 lg:px-40" >
                <div className="flex flex-col  md:flex-row md:items-center gap-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <p className="text-lg font-mono text-indigo-100">
                            Ready to talk to <br /> sales?
                        </p>
                        <h2 className="text-2xl font-semibold leading-tight text-white lg:text-3xl">
                            Reach out for a <br />
                            personalized demo
                        </h2>
                    </div>
                </div>
                <div className="flex lg:justify-end mt-8">
                    <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition">
                        Book a time
                    </button>
                </div>
            </section>
            <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
                <div className="grid gap-8 md:gap-16 lg:grid-cols-2">
                    <h2 className="max-w-xl text-4xl font-semibold leading-tight">
                        Capture every construction project stage with confidence.
                    </h2>

                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                        Construction management software to monitor site conditions throughout
                        the project lifecycle. Use drones, 360 cameras and robots to capture
                        data and automatically sort it by date and location. Tag and annotate
                        issues and share virtual walkthroughs with stakeholders. It’s reality
                        capture – simplified.
                    </p>
                </div>
            </section>
        </div>
    )
}
