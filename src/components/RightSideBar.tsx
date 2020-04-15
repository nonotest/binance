/**
 * Right sidebar/column widget
 * we assume that the height/width are dicated
 * by the widget displayed inside.
 * More often than not we would assign a maxWidth to the container.
 */

import React, { CSSProperties } from 'react'
import { useThemeState } from '../themes/ThemeContext'

import Watchlist from './Watchlist'

interface Props {
  containerStyles?: CSSProperties
}

function RightSideBar({ containerStyles = {} }: Props) {
  const themeState = useThemeState()
  const { theme } = themeState
  const outerContainerStyles = Object.assign(
    containerStyles,
    { backgroundColor: theme.backgrounds.rightSideBar },
    styles.container
  )

  return (
    <div style={outerContainerStyles}>
      <aside>
        <Watchlist />
      </aside>
    </div>
  )
}

const styles = {
  container: {}
} as { [key: string]: CSSProperties }

export default RightSideBar
