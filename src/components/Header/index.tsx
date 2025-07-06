'use client'
import Image from 'next/image'
import React from 'react'

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { AlignJustify } from 'lucide-react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import DesktopMenu from './desktopMenu'

import { HeaderProps } from './types'

const Header = ({ menu }: HeaderProps) => {

    // console.log('menu', menu)

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
                    <div className='hidden md:flex'>
                        <DesktopMenu menu={menu} />
                    </div>
                    <div className='md:hidden'>
                        <Sheet>
                            <SheetTrigger asChild>
                                {/* <Button variant="outline">Open</Button> */}
                                <AlignJustify />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Edit profile</SheetTitle>
                                    <SheetDescription>
                                        Make changes to your profile here. Click save when you&apos;re done.
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Name
                                        </Label>
                                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                            Username
                                        </Label>
                                        <Input id="username" value="@peduarte" className="col-span-3" />
                                    </div>
                                </div>
                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button type="submit">Save changes</Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* <Button>login</Button> */}
                </div>
            </nav>
        </header>
    )
}

export default Header