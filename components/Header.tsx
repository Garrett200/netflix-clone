'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import { SearchIcon, BellIcon } from "@heroicons/react/solid";
import Link from 'next/link';

const Header = () => {
    const [ isScrolled, setIsScrolled ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.addEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <header className={`${isScrolled? 'bg-[#141414]' : 'bg-gradient-to-t from-transparent from-20% via-transparent via-10% to-[#141414] to-96%'}`}>
            <div className="flex items-center space-x-2 md:space-x-10 md:px-5 lg:px-3">
                <img
                src="https://rb.gy/ulxxee"
                width={95}
                height={95}
                className="cursor-pointer object-contain"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className="hidden sm:inline h-6 w-6 cursor-pointer"/>
                <p className="hidden lg:inline font-semibold" >Kids</p>
                <BellIcon className="h-6 w-6 cursor-pointer"/>
                <Link href="/account">
                    <img 
                    src="https://rb.gy/g1pwyx"
                    alt="image"
                    className="cursor-pointer rounded"
                    />
                </Link>
            </div>

        </header>
    );
}

export default Header;