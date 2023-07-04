import { MoviesServices } from '@/services/movies.services'
import { FullMovieData } from '@/types/Responses'
import Image from 'next/image'
import Reviews from '@/components/Rewievs/Reviews'
import { minutesInHours } from '@/utils/helpers/minutesInHours'


// TODO: сделать компонент для списка информации о филме

async function page({ params }: { params: { id: number }}) {
    const movie = await getMovie(params.id)
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className=" mt-10 relative">
        <Image className='mx-auto rounded-3xl' src={movie.backdrop.url} width={1200} height={480} alt='poster'/>
        <div className='w-full absolute top-96 pt-0 pb-0 pl-20 pr-20 '>
          <div className='bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-xl ml-12 w-7/12'>
            <div className="p-10 flex gap-2 flex-col mt-48">
              <p className=" text-violet-400 font-normal text-sm">{`MaileHereko / ${movie.type} / ${movie.name}`}</p>
              <h2 className="text-white font-semibold text-4xl">
                {movie.name}
              </h2>
            </div>
          </div>
          <div className="mt-16 flex gap-10">
            <div className="w-2/4">
              <Image
                className="rounded-3xl mt-2"
                src={movie.poster.url}
                width={480}
                height={720}
                alt="poster"
              />
            </div>
            <div className="w-2/4">
              <div className="flex flex-col gap-6">
                <p className=" text-white text-2xl font-bold">{movie.name}</p>
                <p className=" text-xl font-normal text-gray-400">
                  {movie.description}
                </p>
                <Reviews rating={movie.rating.kp} />
                <div>
                  <p className="font-normal text-base text-gray-500">Type:</p>
                  <p className="font-normal text-xl text-gray-200">
                    {movie.type}
                  </p>
                </div>
                <div>
                  <p className="font-normal text-base text-gray-500">Year:</p>
                  <p className="font-normal text-xl text-gray-200">
                    {movie.year}
                  </p>
                </div>
                <div>
                  <p className="font-normal text-base text-gray-500">
                    Countries:
                  </p>
                  <p className="font-normal text-xl text-gray-200">
                    {movie.countries.map(countrie => countrie.name).join(', ')}
                  </p>
                </div>
                <div>
                  <p className="font-normal text-base text-gray-500">
                    Run time:
                  </p>
                  <p className="font-normal text-xl text-gray-200">
                    {minutesInHours(movie.movieLength)}
                  </p>
                </div>
                <div className='pb-24'>
                  <p className="font-normal text-base text-gray-500">Genres:</p>
                  <p className="font-normal text-xl text-gray-200">
                    {movie.genres.map((genre) => genre.name).join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page

async function getMovie(id: number): Promise<FullMovieData> {
    const movieData = MoviesServices.getMovie(id)
    return movieData
}