
import React from 'react'

import Header from './components/header/Header'
import List from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Hero from './components/hero/Hero'




import { ThemeProvider } from 'styled-components'
import { theme } from "./Themes/default"

import { Layout } from './layout/layout.styled'
import GlobalStyles from './styles/GlobalStyles'


// import Placedetails from './components/placeDetails/Placedetails'


const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <Layout>
             <Header />
              <Hero />
              <Projects />
      </Layout>
        
    </ThemeProvider>
  )
}

export default App
