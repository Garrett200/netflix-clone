'use client'
import { useState, useEffect } from 'react';
import { Movie } from '../typings';
import Image from 'next/image';
import { baseUrl } from '../constants/movie'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/solid';

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    // set a random movie from netflixOriginals to movie state
    if (netflixOriginals && netflixOriginals.length > 0) {
      setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
    }
    return () => {
      setMovie(null);
    };
  }, [netflixOriginals]);

  // Don't render anything until the movie state is not null

  return (
    <div className="flex flex-col space-y-2 space-x-3 md:space-x-0 lg:px-2.5 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end
    lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="No Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7x1">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-sm text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl py-4">{movie?.overview}</p>
        <div className="flex space-x-3">
          <button className="bannerButton bg-white text-black">
            <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
            Play
          </button>

          <button className="bannerButton bg-[gray]/70 ">
            <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
