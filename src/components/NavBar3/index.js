import React from 'react'
import Media from 'react-media'

import DesktopNav from './Desktop'
import MobileNav from './Mobile'

import routes from './routes'

export default () => (
  <Media query="(max-width: 950px)">
    {matches =>
      matches ? (
        <MobileNav routes={routes[0]} button={routes[1]} />
      ) : (
        <DesktopNav routes={routes[0]} button={routes[1]} />
      )
    }
  </Media>
)
