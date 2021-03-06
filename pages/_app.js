import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from "../src/lib/AlurakutCommons.js";

const GlobalStyle = createGlobalStyle`
  // Reset CSS
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *[aria-hidden='true'] {
    display: none;
  }

  *[aria-hidden='false'] {
    display: block;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #D9E6F6;
    font-family: sans-serif;
  }

  #__next {
    display: flex;
    min-height: 110vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: .7em;
  }

  li {
    list-style: none;
  }

  a, a:hover, a:active {
    text-decoration: none;
    color: #000;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
