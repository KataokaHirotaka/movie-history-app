const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const urls = {
  default: `https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}&language=ja-JP`,
  popularMovie: `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}&language=ja-JP`,
}
