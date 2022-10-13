function sleep(msec: number) {
  return new Promise(resolve => {
    setTimeout(resolve, msec)
  })
}

export const fetcher = (url: string) => {
  fetch(url).then(res => {
    sleep(5000)
    res.json()
  })
}
