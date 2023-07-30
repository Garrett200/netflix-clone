'use client'
import React, { useRef, useState } from 'react';
import { Movie } from '../typings';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';
import Thumbnail from './Thumbnail';

interface Props {
    title: string
    movies: Movie[]
}
const Row = ({ title, movies }: Props) => {
    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)

    const handleClick = () => {

    }
    
    return (
        <div className="h-40 space-y-0.5 md:space-y-2 lg:ml-2 md:ml-0 sm:ml-3">
            <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition
                            duration-200 hover:text-white md:text-2xl">
                {title}
            </h2>
            <div ref={rowRef} className="group relative md:-ml-2">
                <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9
                cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" 
                onClick={() => handleClick("left")}/>

                <div className="flex items-center space-x-0.5 scrollbar-hide overflow-x-auto whitespace-nowrap md:space-x-2.5
                md:p-2">
                    {movies.map((movie) => (
                        <Thumbnail key={movie.id} movie={movie}/>
                    ))}
                </div>
                <ChevronRightIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9
                cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" 
                onClick={() => handleClick("right")}/>
            </div>
        </div>
    );
}

export default Row;