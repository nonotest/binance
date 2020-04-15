/**
 * Content component.
 * Middle.
 * Height is fixed..
 */

import React, { CSSProperties } from 'react'
import { useThemeState } from '../themes/ThemeContext'

interface Props {
  containerStyles?: CSSProperties
}

function Content({ containerStyles = {} }: Props) {
  const themeState = useThemeState()
  const { theme } = themeState
  const outerContainerStyles = Object.assign(
    {},
    containerStyles,
    { backgroundColor: theme.backgrounds.content },
    styles.container
  )

  return (
    <div style={outerContainerStyles}>
      <main />
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    height: 600
  }
} as { [key: string]: CSSProperties }

export default Content
