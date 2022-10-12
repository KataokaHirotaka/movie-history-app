export const fetcher = async (url: string) => {
  console.log(url, 'uuuuuuuuuu')

  fetch(url).then(res => res.json())
}
