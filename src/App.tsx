import React from 'react'

import { ThemeProvider } from './themes/ThemeContext'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </>
  )
}

export default App
