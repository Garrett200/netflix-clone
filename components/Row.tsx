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

    const handleClick = (direction: string) => {
        setIsMoved(true)

        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current

            const scrollTo =
                direction === "left" ?
                    scrollLeft - clientWidth / 2
                    :
                    scrollLeft + clientWidth / 2

            rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
        }
    }

    return (
        <div className="h-40 space-y-0.5 md:space-y-2 lg:ml-2 md:ml-0 sm:ml-3">
            <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition
                            duration-200 hover:text-white md:text-2xl">
                {title}
            </h2>
            <div className="group relative md:-ml-2">
                <div className="absolute top-2 bottom-0 left-2 z-50 h-20 min-2-[180px] cursor-pointer transition duration-200
                    ease-out md:h-36 md:min-w-[40px] hover:bg-[#141414a2] md:rounded"  style={{'borderRadius':'3px'}}>
                    <ChevronLeftIcon className={`
                        absolute top-0 bottom-0 left-0 z-40 m-auto h-9 w-9
                        cursor-pointer opacity-0 transition hover:scale-125 
                        group-hover:opacity-100 ${!isMoved && "hidden"}`}
                        onClick={() => handleClick("left")} />
                </div>

                <div ref={rowRef} className="flex items-center space-x-0.5 scrollbar-hide overflow-x-auto whitespace-nowrap md:space-x-2.5
                md:p-2">
                    {movies.map((movie) => (
                        <Thumbnail key={movie.id} movie={movie} />
                    ))}
                </div>
                <div className="absolute top-2 bottom-0 right-0 z-50 h-20 min-2-[180px] cursor-pointer transition duration-200
                    ease-out md:h-36 md:min-w-[40px] hover:bg-[#141414a2] md:rounded"  style={{'borderRadius':'3px'}}>
                    <ChevronRightIcon className={`
                        absolute top-0 bottom-0 right-0 z-40 m-auto h-9 w-9
                        cursor-pointer opacity-0 transition hover:scale-125 
                        group-hover:opacity-100`}
                        onClick={() => handleClick("right")} />
                </div>
            </div>
        </div>
    );
}

export default Row;