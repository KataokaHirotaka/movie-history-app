import React from 'react'
import Head from 'next/head'
import { layoutProps } from '~/src/types'
import { Header } from '../elements/Header'
import styled from 'styled-components'

export const PageLayout = ({ title, description, children }: layoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Main>{children}</Main>
    </>
  )
}

/**
 * スタイル定義
 */

const Main = styled.main`
  ${({ theme }) => theme.breakpoint.base`
  // padding: 47px ${theme.space[2]} 0;
    max-width: ${theme.contents.maxWidth};
    margin: 0 auto;
    padding: 50px ${theme.contents.base} 0;
  `}

  ${({ theme }) => theme.breakpoint.md`
    padding: 46px ${theme.contents.md} 0;
  `}

  ${({ theme }) => theme.breakpoint.xl`
    padding: 46px 0 0;
  `}
`
