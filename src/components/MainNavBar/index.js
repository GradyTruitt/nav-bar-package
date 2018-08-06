import React from 'react'
import Media from 'react-media'

import DesktopNav from './Desktop'
// import MobileNav from './Mobile'

import buttons from './buttons'

export default () => (
  <Media query="(max-width: 950px)">
    {matches =>
      matches ? (
        <DesktopNav buttons={buttons}/>
      ) : (
        <DesktopNav buttons={buttons} />
      )
    }
  </Media>
)
