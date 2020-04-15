import { black, white } from './colors'
import { Theme } from './types'

const DarkTheme: Theme = {
  name: 'dark',
  backgrounds: {
    appBar: black,
    content: black,
    footer: black,
    rightSideBar: black,
    bitcoinMovers: black,
    ethMovers: black
  },
  colors: {
    text: white
  },
  buttons: {
    title: {
      fontSize: 18
    }
  }
}

export default DarkTheme
