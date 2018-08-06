import { TweenMax, TimelineMax } from 'gsap';

const tl = new TimelineMax()

export default {
  /*********** animate menu tray and items ***********/

  toggleDesktopNav(open, tray, logo) {
    let arr = Array.from(tray.children);
    if (!open) {
      tl.add(TweenMax.to(tray, 0.3, { width: 550 }))
      TweenMax.to(logo, 0.3, { transform: 'none', bottom: '30px', left: '195px'})
      tl.add(TweenMax.to(arr, 0, { display: 'block' }, 0.3))
      tl.add(TweenMax.staggerTo(arr, 0.2, { marginTop: 30, opacity: 1 }, 0.1))
    }
    else {
      tl.add(TweenMax.staggerTo(arr.reverse(), 0.2, { marginTop: 120, opacity: 0 }, 0.1))
      tl.add(TweenMax.staggerTo(arr, 0, { delay: `0.${arr.length}`, display: 'none' } ))
      TweenMax.to(logo, 0.3, { delay: `0.${arr.length}`, transform: 'rotate(-90deg)', bottom: '10px', left: '10px'})
      TweenMax.to(tray, 0.3, { delay: `0.${arr.length}`, width: 70 })
    }
  },

  toggleMobileNav(open, tray) {
    let arr = Array.from(tray.children);
    let height = arr.length * 100
    if (!open) {
      TweenMax.to(tray, 0.3, { height: height })
      tl.add(TweenMax.to(arr, 0, { delay: 0.2, display: 'block' }, 0.3))
      tl.add(TweenMax.staggerTo(arr, 0.2, { opacity: 1 }, 0.1))
    }
    else {
      tl.add(TweenMax.staggerTo(arr.reverse(), 0.1, { opacity: 0 }, 0.1))
      tl.add(TweenMax.staggerTo(arr, 0, { delay: `0.${arr.length}`, display: 'none' } ))
      TweenMax.to(tray, `0.${arr.length+=4}`, { height: 73 })
    }
  },
}
