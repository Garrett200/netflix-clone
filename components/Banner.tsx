'use client'
import { useState, useEffect } from 'react';
import { Movie } from '../typings';
import Image from 'next/image';
import { baseUrl } from '../constants/movie'
import { FaPlay } from 'react-icons/fa'

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    // Function to set a random movie from netflixOriginals to movie state
    if (netflixOriginals && netflixOriginals.length > 0) {
      setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
    }

    // Set a random movie initially

    // Cleanup function to reset the movie state when the component unmounts
    return () => {
      setMovie(null);
    };
  }, [netflixOriginals]);

  // Don't render anything until the movie state is not null

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end
    lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="No Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7x1">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>
        <div>
          <button className="bannerButton"><FaPlay/>Play</button>

          <button className="bannerButton">More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
