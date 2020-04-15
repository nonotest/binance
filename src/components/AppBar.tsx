/**
 * Top component.
 * Has a button to switch theme.
 */
import React, { CSSProperties } from 'react'
import {
  useThemeState,
  useThemeDispatch,
  themeActions
} from '../themes/ThemeContext'

function AppBar() {
  const themeState = useThemeState()
  const dispatch = useThemeDispatch()
  const { theme } = themeState
  const containerStyles = Object.assign(
    { backgroundColor: theme.backgrounds.appBar },
    styles.container
  )

  return (
    <div style={containerStyles}>
      <header>
        <button
          style={styles.switchButton}
          onClick={() => {
            // Dispatches a switch theme action

            //@ts-ignore
            dispatch({
              type: themeActions.SWITCH_THEME,
              payload: {}
            })
          }}
        >
          Switch Theme
        </button>
      </header>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  switchButton: {
    height: 30
  }
} as { [key: string]: CSSProperties }

export default AppBar
