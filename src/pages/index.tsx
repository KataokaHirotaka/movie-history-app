import type { NextPage } from 'next'
import styled from 'styled-components'
import { HomeLayout } from '../components/layouts/HomeLayout'

const Home: NextPage = () => {
  return (
    <HomeLayout title="MovieHistory" description="あなたの映画">
      <h2>test</h2>
      <a href="">faa</a>
    </HomeLayout>
  )
}

export default Home
