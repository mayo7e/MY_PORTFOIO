
import React from 'react'

import Header from './components/header/Header'
import List from './components/list/List'
import Map from './components/map/Map'



import { MainBody } from './styles/Global.styled'
import { ThemeProvider } from 'styled-components'
import { theme } from "./Themes/default"


// import Placedetails from './components/placeDetails/Placedetails'


const App = () => {
  return (
    <ThemeProvider theme={theme} >
          <Header />
          <MainBody />
          <List />
          <Map />
    </ThemeProvider>
  )
}

export default App
