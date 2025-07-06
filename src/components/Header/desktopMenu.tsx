import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { HeaderProps } from './types'

const DesktopMenu = ({ menu }: HeaderProps)  => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {menu && menu?.map(({ text, url }, index) => (
                    <NavigationMenuItem key={index.toString()}>
                    <NavigationMenuTrigger>{text}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>
                            <div className="w-[50rem] flex px-7 py-3 gap-14">
                                <div className="flex flex-col gap-3">
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                    <p className='text-lg'>Console</p>
                                </div>
                            </div>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                ))}
                
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default DesktopMenu