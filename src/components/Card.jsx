import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Card({ data }) {
  return (
    <div>
        <Link href={`/movie/${data.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`} width={500} height={300} alt='thumb'>

            </Image>
            <div>
                <p className='line-clamp-2 text-md'>{data.overview}</p>
                <h2 className='font-bold truncate text-md'>{data.title || data.name}</h2>
                <p>
                    { data.release_date || data.first_air_date }
                    {data.vote_count}
                </p>
            </div>
        </Link>
    </div>
  )
}

export default Card