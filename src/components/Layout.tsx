/**
 * Layout component.
 * We listen to media query changes there via
 * our useMedia hook.
 */
import React from 'react'
import useMedia from '../themes/use-media-query'
import AppBar from './AppBar'
import ContentContainer from './ContentContainer'
import Footer from './Footer'

function Layout() {
  useMedia(
    ['(min-width: 800px)', '(min-width: 400px)'],
    ['laptop', 'mobile'],
    'mobile'
  )

  return (
    <>
      <AppBar />
      <ContentContainer />
      <Footer />
    </>
  )
}
export default Layout
