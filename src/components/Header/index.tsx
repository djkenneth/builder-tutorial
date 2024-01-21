import Image from 'next/image'
import React from 'react'

import { Button } from "@/components/ui/button"

const Header = () => {
    return (
        <header className="bg-gray-100">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image width={100} height={100} src="/vercel.svg" alt="logo" />
                    </a>
                </div>
                <div className="flex">
                    <Button>login</Button>
                </div>
            </nav>
        </header>
    )
}

export default Header