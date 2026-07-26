import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Routes from './Routes'
import Header from './component/Header'
import Footer from './component/Footer'
import { ThemeProvider } from 'styled-components'
import { colors, media } from './theme'
import GlobalStyle from './GlobalStyle.jsx'
import { trackPageView } from './lib/analytics'

const theme = {
  colors,
  media,
}

const AnalyticsListener = () => {
  const location = useLocation()

  useEffect(() => {
    trackPageView({
      path: location.pathname,
      title: document.title,
    })
  }, [location.pathname])

  return null
}

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <a className="skip-link" href="#main-content">
      Skip to main content
    </a>
    <AnalyticsListener />
    <Header />
    <main id="main-content" role="main" className="main-content">
      <Routes />
    </main>
    <Footer />
  </ThemeProvider>
)

export default App
