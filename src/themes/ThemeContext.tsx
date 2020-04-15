import React, { Dispatch, createContext, useContext, useReducer } from 'react'
import { Theme } from './types'
import LightTheme from './LightTheme'
import DarkTheme from './DarkTheme'

export interface ThemeProviderProps {
  children?: React.ReactNode
}

export interface ThemeProviderState {
  theme: Theme
  layout: string
}

export const themeActions = {
  SET_LAYOUT: 'SET_LAYOUT',
  SWITCH_THEME: 'SWITCH_THEME'
}

interface Actions {
  type: keyof typeof themeActions
  payload: any
}

export const ThemeStateContext = createContext<ThemeProviderState>(
  getInitialState()
)
ThemeStateContext.displayName = 'ThemeContext'
// @ts-ignore
export const ThemeDispatchContext = createContext<Dispatch<Actions>>()

function themeReducer(state: ThemeProviderState, action: Actions) {
  switch (action.type) {
    case themeActions.SWITCH_THEME: {
      let theme: Theme
      if (state.theme.name === 'dark') {
        theme = LightTheme
      } else {
        theme = DarkTheme
      }
      return {
        ...state,
        theme
      }
    }
    case themeActions.SET_LAYOUT: {
      return {
        ...state,
        layout: action.payload.layout
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function getInitialState(): ThemeProviderState {
  return {
    theme: LightTheme,
    layout: 'mobile'
  }
}

// Our theme provider component.
export function ThemeProvider(props: ThemeProviderProps) {
  const [state, dispatch] = useReducer(themeReducer, getInitialState())

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {props.children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  )
}

export function useThemeState(): ThemeProviderState {
  const context = useContext(ThemeStateContext)
  if (context === undefined) {
    throw new Error('useThemeState must be used within a ThemeProvider')
  }

  return context
}

export function useThemeDispatch() {
  const context = useContext(ThemeDispatchContext)
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider')
  }
  return context
}
