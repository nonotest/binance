/**
 * The ContentContainer displays our main app content.
 * It handles displaying two different layouts.
 */

import React, { CSSProperties } from 'react'
import Content from './Content'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import { useThemeState } from '../themes/ThemeContext'

function ContentContainer() {
  const themeState = useThemeState()
  const content = getContent(themeState.layout)
  return <div style={styles.container}>{content}</div>
}

// this would allow us to add different layouts
// if needed
function getContent(layout: string): JSX.Element {
  switch (layout) {
    case 'laptop': {
      return <LaptopLayout />
    }
    case 'mobile': {
      return <MobileLayout />
    }
  }
  return <LaptopLayout />
}

// Note: containerStyle behaviour changes
// with the layout.
function MobileLayout() {
  return (
    <div style={styles.mobileLayoutContainer}>
      <Content containerStyles={{ marginBottom: 10 }} />
      <LeftSideBar containerStyles={{ marginBottom: 10 }} />
      <RightSideBar />
    </div>
  )
}

// Note: containerStyle behaviour changes
// with the layout.
function LaptopLayout() {
  return (
    <div style={styles.laptopLayoutContainer}>
      <LeftSideBar />
      <Content containerStyles={{ margin: '0 10px 0 10px' }} />
      <RightSideBar containerStyles={{ width: 200 }} />
    </div>
  )
}

const styles = {
  container: {
    margin: '10px 0 10px 0'
  },
  laptopLayoutContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  mobileLayoutContainer: {}
} as { [key: string]: CSSProperties }

export default ContentContainer
