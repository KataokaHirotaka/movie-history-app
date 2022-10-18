import type { NextPage } from 'next'
import styled from 'styled-components'
import { Slider } from '../components/elements/Slider'
import { HomeLayout } from '../components/layouts/HomeLayout'
import { urls } from '../data'

const Home: NextPage = () => {
  return (
    <HomeLayout title="MovieHistory" description="あなたの映画">
      <Slider url={urls.default}></Slider>
    </HomeLayout>
  )
}

export default Home
