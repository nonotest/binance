/**
 * Our ETHmovers widget.
 * Just a block.
 */
import React, { CSSProperties } from 'react'
import { useThemeState } from '../themes/ThemeContext'

function EthMovers() {
  const themeState = useThemeState()
  const { theme } = themeState
  const containerStyles = Object.assign(
    { backgroundColor: theme.backgrounds.ethMovers },
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

export default EthMovers
