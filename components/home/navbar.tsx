"use client"
import { Languages } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const items = [
        { label: 'Platform', href: '/' },
        { label: 'Solutions', href: '/solutions' },
        { label: 'Resources', href: '/resources' },
        { label: 'Connect', href: '/connect' },
        { label: 'Pricing', href: '/pricing' }
    ]

    return (
        <div className="flex items-center justify-between h-16 bg-[#1f1f1f] border-b border-muted-foreground/30 px-4 md:px-32">
            <h1 className="text-xl font-semibold text-[#e5e5e5]">Logo</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-[#e7e7e7]/80 hover:text-white transition-colors duration-200 font-semibold"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
                <button className="text-[#e7e7e7]/80 hover:text-white transition-colors duration-200">
                    <Languages size={24} />
                </button>
                <Button className="bg-transparent text-white hover:bg-white hover:text-black border-2 border-white rounded-2xl">
                    Log in
                </Button>
                <Button className="bg-white text-black hover:bg-white hover:text-black rounded-2xl">
                    Book a demo
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-[#e7e7e7]/80 hover:text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-[#1f1f1f] border-b border-muted-foreground/30 md:hidden">
                    <div className="flex flex-col px-4 py-4 space-y-4">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-[#e7e7e7]/80 hover:text-white transition-colors duration-200 font-semibold"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 pt-4 border-t border-muted-foreground/30">
                            <Button className="bg-transparent text-white hover:bg-white hover:text-black border-2 border-white rounded-2xl w-full">
                                Log in
                            </Button>
                            <Button className="bg-white text-black hover:bg-white hover:text-black rounded-2xl w-full">
                                Book a demo
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
