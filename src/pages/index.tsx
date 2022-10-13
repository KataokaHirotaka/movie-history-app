import type { NextPage } from 'next'
import styled from 'styled-components'
import { Slider } from '../components/elements/Slider'
import { HomeLayout } from '../components/layouts/HomeLayout'
import { urls } from '../data'

const Home: NextPage = () => {
  const popularMovieUrl: string = urls.popularMovie

  return (
    <HomeLayout title="MovieHistory" description="あなたの映画">
      <Slider url={popularMovieUrl}></Slider>
    </HomeLayout>
  )
}

export default Home
