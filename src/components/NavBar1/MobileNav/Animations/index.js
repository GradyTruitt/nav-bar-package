import { TweenMax, TimelineMax } from 'gsap';

const tl = new TimelineMax();

export default {

  /*********** animate menu tray and items ***********/

  toggleMobileNav(open) {
    let tray = document.getElementById('nav-tray');
    let items = document.getElementById('nav-items');
    let arr = Array.from(items.children);

    if (!open) {
      TweenMax.to(items, 0, {top: 60, height: 'auto'})
      tl.add(TweenMax.to(tray, 0.3, { height: 500 }))
      tl.add(TweenMax.staggerTo(arr, 0.5, {opacity: 1, margin: '35px auto'}, 0.2))
    }
    else {
      tl.add(TweenMax.staggerTo(arr.reverse(), 0.5, {opacity: 0, margin: '80px auto'}, 0.2))
      TweenMax.to(items, 0, { delay: 1.2, top: 0, height: 0 })
      tl.add(TweenMax.to(tray, 0.3, { height: 70 }))
    }
  },
}
