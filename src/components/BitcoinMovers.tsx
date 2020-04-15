/**
 * Bitcoin mover.
 * Widget used on the left side bar at the moment.
 */
import React, { CSSProperties } from 'react'
import { useThemeState } from '../themes/ThemeContext'

interface Props {
  containerStyles?: CSSProperties
}

function BitcoinMovers({ containerStyles = {} }: Props) {
  const themeState = useThemeState()
  const { theme } = themeState
  const outerContainerStyles = Object.assign(
    {},
    containerStyles,
    { backgroundColor: theme.backgrounds.bitcoinMovers },
    styles.container
  )

  return <div style={outerContainerStyles} />
}

const styles = {
  container: {
    height: 295
  }
} as { [key: string]: CSSProperties }

export default BitcoinMovers
