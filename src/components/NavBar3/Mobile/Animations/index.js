import { TweenMax, TimelineMax } from 'gsap';

const tl = new TimelineMax();

export default {

  /*********** animate menu tray and items ***********/

  toggleMobileNav(open) {
    let tray = document.getElementById('side-nav-tray');
    let items = document.getElementById('side-nav-items');
    console.log(items)
    let arr = Array.from(items.children);

    if (!open) {
      TweenMax.to(tray, 0.3, { width: 270, boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.2)' })
      tl.add(TweenMax.to(items, 0.3, { width: 200 }))
      tl.add(TweenMax.staggerTo(arr, 0.2, { delay: 0.3, opacity: 1, margin: '20px 0' }, 0.1))
    }
    else {
      tl.add(TweenMax.staggerTo(arr.reverse(), 0.2, { opacity: 0, margin: '60px 0 10px' }, 0.1))
      TweenMax.to(items, 0.3, { delay: 0.9, width: 0 })
      tl.add(TweenMax.to(tray, 0.3, { width: 0 }))
    }
  },
}
