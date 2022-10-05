import { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../themes'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  *,::before,::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    transition: .25s;
  }
  ol. ul {
    list-style: none;
  }
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
