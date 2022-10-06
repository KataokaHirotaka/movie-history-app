import type { NextPage } from 'next'
import styled from 'styled-components'
import { HomeLayout } from '../components/layouts/HomeLayout'

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Main>
        <h2>test</h2>
        <a href="">faa</a>
      </Main>
    </HomeLayout>
  )
}

export default Home


/**
 * スタイル定義
 */

const Main = styled.main`
  ${({ theme }) => theme.breakpoint.base`
    // padding: 47px ${theme.space[2]} 0;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 47px;
  `}
`