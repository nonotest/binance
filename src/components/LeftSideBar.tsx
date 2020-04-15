/**
 * Left sidebar/column widget
 * we assume that the height/width are dicated
 * by the widget displayed inside.
 * More often than not we would assign a maxWidth to the container.
 */

import React, { CSSProperties } from 'react'
import BitcoinMovers from './BitcoinMovers'
import EthMovers from './EthMovers'
import { useThemeState } from '../themes/ThemeContext'

function Spacer() {
  return <div style={{ padding: 5 }} />
}

interface Props {
  containerStyles?: CSSProperties
}

function LeftSideBar({ containerStyles = {} }: Props) {
  const themeState = useThemeState()
  const { layout } = themeState

  // horizontal or vertical layout depending
  // on screen size
  let direction = ''
  let widgetContainerStyles = {}
  if (layout === 'laptop') {
    direction = 'column'
    widgetContainerStyles = { width: 200 }
  } else {
    direction = 'row'
    widgetContainerStyles = { flex: 1, display: 'flex' }
  }
  const outerContainerStyles = Object.assign(
    {},
    containerStyles,
    styles.container
  )

  return (
    <div style={outerContainerStyles}>
      <aside style={Object.assign({ flexDirection: direction }, styles.aside)}>
        <BitcoinMovers containerStyles={widgetContainerStyles} />
        <Spacer />
        <EthMovers containerStyles={widgetContainerStyles} />
      </aside>
    </div>
  )
}

const styles = {
  container: {},
  aside: {
    display: 'flex',
    flex: 1
  }
} as { [key: string]: CSSProperties }

export default LeftSideBar
