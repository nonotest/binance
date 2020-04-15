// @ts-nocheck

// In order to not pull additional libraries
// and stick with css-in-js we use a modified
// version of a media query (dispatch layout)
// hook from https://usehooks.com/useMedia/

// The hook lets us declare a list of media queries
// and values matching these media queries.
// It is easily extentable if we have to handle new
// device screens.
// It is easily extendable if we have to display
// complex layout changes.

import { useEffect, useState } from 'react'
import { themeActions, useThemeDispatch } from './ThemeContext'

// Hook
function useMedia(queries, values, defaultValue) {
  const dispatch = useThemeDispatch()
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map((q) => window.matchMedia(q))

  // Function that gets value based on matching media query
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex((mql) => mql.matches)
    // Return related value or defaultValue if none
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }

  // State and setter for matched value
  const [value, setValue] = useState(getValue)
  setTimeout(() => {
    dispatch({
      type: themeActions.SET_LAYOUT,
      payload: {
        layout: value
      }
    })
  }, 0)

  useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue)
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach((mql) => mql.addListener(handler))
      // Remove listeners on cleanup
      return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler))
    },
    [] // Empty array ensures effect is only run on mount and unmount
  )
}

export default useMedia
