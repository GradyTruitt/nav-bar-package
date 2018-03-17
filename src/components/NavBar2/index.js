import React from 'react'
import Media from 'react-media'

import DesktopNav from './Desktop'
import MobileNav from './Mobile'

import routes from './routes'

export default () => (
  <Media query="(max-width: 950px)">
    {matches =>
      matches ? (
        <MobileNav links={routes[0]} button={routes[1]} />
      ) : (
        <DesktopNav links={routes[0]} button={routes[1]} />
      )
    }
  </Media>
)
