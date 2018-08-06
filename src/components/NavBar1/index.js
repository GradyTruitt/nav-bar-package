import React from 'react'
import Media from 'react-media'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default () => (
  <Media query='(max-width: 950px)'>
    { matches => matches ? <MobileNav /> : <DesktopNav /> }
  </Media>
)
