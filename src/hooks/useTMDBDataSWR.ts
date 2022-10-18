import useSWR from 'swr'
import { fetcher } from '../libs/fetcher'

export const useTMDBDataSWR = (url: string) => {
  const { data, error } = useSWR(url, fetcher)

  // const TMDBData = {
  //   title: data.title,
  //   overview: data.overview,
  //   releaseDate: data.releaseDate,
  //   posterPath: data.posterPath,
  // }

  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  }
}
