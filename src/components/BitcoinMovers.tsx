/**
 * Bitcoin mover.
 * Widget used on the left side bar at the moment.
 */
import React, { CSSProperties } from 'react'
import { useThemeState } from '../themes/ThemeContext'

function BitcoinMovers() {
  const themeState = useThemeState()
  const { theme } = themeState
  const containerStyles = Object.assign(
    { backgroundColor: theme.backgrounds.bitcoinMovers },
    styles.container
  )

  return <div style={containerStyles} />
}

const styles = {
  container: {
    height: 295,
    width: 200
  }
} as { [key: string]: CSSProperties }

export default BitcoinMovers
