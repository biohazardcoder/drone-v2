"use client"

import { useState } from "react"
import Link from "next/link"
import {
    Languages,
    ChevronDown,
    Menu,
    X,
} from "lucide-react"
import { Button } from "../ui/button"

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileSolutions, setMobileSolutions] = useState(false)

    return (
        <header
            className="relative bg-[#1f1f1f] border-b border-white/10 px-4 md:px-24"
            onMouseLeave={() => setOpen(false)}
        >
            <div className="flex h-16 items-center justify-between">
                <h1 className="text-xl font-semibold text-white">Logo</h1>

                <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
                    <Link href="#" className="text-white/70 hover:text-white">
                        Platform
                    </Link>

                    <div
                        onMouseEnter={() => setOpen(true)}
                        className={`flex items-center gap-1 rounded-full px-3 py-1 transition
              ${open ? "bg-[#2b2b2b] text-white" : "text-white/70 hover:text-white"}
            `}
                    >
                        <span>Solutions</span>
                        <ChevronDown size={14} />
                    </div>

                    <Link href="#" className="text-white/70 hover:text-white">
                        Resources
                    </Link>
                    <Link href="#" className="text-white/70 hover:text-white">
                        Connect
                    </Link>
                    <Link href="#" className="text-white/70 hover:text-white">
                        Pricing
                    </Link>
                </nav>
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X /> : <Menu />}
                </button>
            </div>

            {open && <SolutionsDropdown />}

            {mobileOpen && (
                <div className="md:hidden absolute left-0 right-0 top-16 z-99 bg-[#1f1f1f] border-t border-white/10">
                    <div className="flex flex-col px-6 py-6 space-y-5 text-sm font-semibold text-white">
                        <Link href="#">Platform</Link>

                        <button
                            onClick={() => setMobileSolutions(!mobileSolutions)}
                            className="flex items-center justify-between"
                        >
                            <span>Solutions</span>
                            <ChevronDown
                                className={`transition ${mobileSolutions ? "rotate-180" : ""}`}
                                size={16}
                            />
                        </button>

                        {mobileSolutions && (
                            <div className="flex flex-col gap-2 text-white/80">
                                <Link href="/construction">
                                    <h1>Construction</h1>
                                </Link>
                                <Link href="#">
                                    <h1>Mining</h1>
                                </Link>
                                <Link href="#">
                                    <h1>Oil and Gas</h1>
                                </Link>
                                <Link href="#">
                                    <h1>Utilities</h1>
                                </Link>
                                <Link href="#">
                                    <h1>Renewable energy</h1>
                                </Link>
                                <Link href="#">
                                    <h1>Roofing</h1>
                                </Link>
                                <Link href="#">
                                    <h1>Agriculture</h1>
                                </Link>
                                <Link href="#">
                                    <h1>Property management</h1>
                                </Link>
                                <Link href="#">
                                    <h1>Owners</h1>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}


const SolutionsDropdown = () => {
    return (
        <div className="absolute left-0 right-0 top-full z-99 bg-[#262626]">
            <div className="mx-auto max-w-6xl px-6 py-8">
                <p className="mb-4 text-sm font-semibold text-yellow-400">
                    Industries
                </p>

                <div className="mb-6 border-t border-white/10" />

                <div className="grid grid-cols-2 gap-x-24 gap-y-4 text-sm text-white">
                    <Link href="/construction">Construction</Link>
                    <Link href="#">Mining</Link>
                    <Link href="#">Oil and Gas</Link>
                    <Link href="#">Utilities</Link>
                    <Link href="#">Renewable energy</Link>
                    <Link href="#">Roofing</Link>
                    <Link href="#">Agriculture</Link>
                    <Link href="#">Property management</Link>
                    <Link href="#">Owners</Link>
                </div>

            </div>
        </div>
    )
}
