/**
 * Our ETHmovers widget.
 * Just a block.
 */
import React, { CSSProperties } from 'react'
import { useThemeState } from '../themes/ThemeContext'

interface Props {
  containerStyles?: CSSProperties
}

function EthMovers({ containerStyles = {} }: Props) {
  const themeState = useThemeState()
  const { theme } = themeState
  const outerContainerStyles = Object.assign(
    {},
    containerStyles,
    { backgroundColor: theme.backgrounds.ethMovers },
    styles.container
  )

  return <div style={outerContainerStyles} />
}

const styles = {
  container: {
    height: 295
  }
} as { [key: string]: CSSProperties }

export default EthMovers
