import Result from "@/components/Result";
import Image from "next/image";
const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(`
    https://api.themoviedb.org/3${
    genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=vi-VN&page=1`)
    const data = await res.json()
    if(!res.ok ) {
        throw new Error('Could not retrieve')
    }
    const result = data.results
    console.log(result)
  return (
    <div>
      <Result result={result}/>
    </div>
  );
}
