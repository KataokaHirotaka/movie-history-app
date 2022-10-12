import type { NextPage } from 'next'
import styled from 'styled-components'
import { Slider } from '../components/elements/Slider'
import { HomeLayout } from '../components/layouts/HomeLayout'
import { urls } from '../data'

const Home: NextPage = () => {
  const popularMovieUrl: string = urls.popularMovie
  console.log(popularMovieUrl)

  return (
    <HomeLayout title="MovieHistory" description="あなたの映画">
      <h2>test</h2>
      <a href="">faa</a>
      <Slider url={popularMovieUrl}></Slider>
    </HomeLayout>
  )
}

export default Home
