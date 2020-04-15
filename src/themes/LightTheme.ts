import { black, grey, army, green, olive, yellow, camilla } from './colors'
import { Theme } from './types'

const LightTheme: Theme = {
  name: 'light',
  backgrounds: {
    appBar: army,
    content: camilla,
    footer: olive,
    rightSideBar: yellow,
    bitcoinMovers: green,
    ethMovers: grey
  },
  colors: {
    text: black
  },
  buttons: {
    title: {
      fontSize: 18
    }
  }
}

export default LightTheme
