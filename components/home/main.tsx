export const Main = () => {
    return (
        <div className="min-h-[calc(100vh-72px)] bg-linear-to-b from-[#1f1f1f] to-[#202020] px-4 sm:px-8 md:px-32 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-40 py-8" >
            <div className="flex flex-col w-full md:w-auto">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-[#e7e7e7]">
                    Leave no <br />
                    site unseen
                </h1>
                <p className="text-yellow-500 mt-4 sm:mt-8 text-lg sm:text-xl font-semibold">Capture what matters, before you can't.</p>
                <p className="mt-2 sm:mt-4 text-gray-300 text-base sm:text-lg">DroneDeploy delivers robotic capture and real AI <br /> for a complete understanding of quality, safety <br /> and progress across all your sites.</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button className="text-base sm:text-lg bg-white text-black hover:bg-gray-200 px-6 py-3 font-semibold rounded-4xl">Book a demo</button>
                    <button className="text-base sm:text-lg bg-transparent text-white hover:bg-white hover:text-black border-2 border-white px-6 py-3 font-semibold rounded-4xl">Explore our content</button>
                </div>
            </div>
            <div className="w-full sm:w-auto">
                <video src="/main.mp4" autoPlay loop muted className="w-full max-w-md h-auto object-cover rounded-xl">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}
