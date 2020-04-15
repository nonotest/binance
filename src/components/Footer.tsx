/**
 * Our footer
 */

import React, { CSSProperties } from 'react'
import { useThemeState } from '../themes/ThemeContext'
import { black } from '../themes/colors'

function Footer() {
  const themeState = useThemeState()
  const { theme } = themeState
  const containerStyle = Object.assign(
    {},
    { backgroundColor: theme.backgrounds.footer },
    styles.container
  )

  // if we wanted a different theme for the
  // click here button we could add it here.

  return (
    <div style={containerStyle}>
      <footer>
        <button style={styles.button}>Click here!</button>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderRadius: 20,
    padding: '10px 20px',
    color: black,
    border: 0,
    // we assume that we dont need fallbacks..
    background:
      'linear-gradient(90deg, rgba(240,187,13,1) 0%, rgba(250,217,58,1) 100%)'
  }
} as { [key: string]: CSSProperties }

export default Footer
