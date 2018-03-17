import { TweenMax, TimelineMax } from 'gsap';

const tl = new TimelineMax();

export default {

  /*********** animate menu tray and items ***********/

  toggleDesktopNav(open) {
    let tray = document.getElementById('nav-tray');
    let logo = document.getElementById('nav-logo');
    let items = document.getElementById('nav-items');
    let arr = Array.from(items.children);
    if (!open) {
      TweenMax.to(items, 0, {left: 0})
      TweenMax.to(logo, 0.3, { transform: 'none', bottom: '30px', left: '195px'})
      tl.add(TweenMax.to(tray, 0.3, { width: 550 }, 0.5))
      tl.add(TweenMax.staggerTo(arr, 0.5, {opacity: 1, margin: '60px auto'}, 0.2))
    }
    else {
      tl.add(TweenMax.staggerTo(arr.reverse(), 0.2, {opacity: 0, margin: '120px auto 80px'}, 0.1))
      TweenMax.to(items, 0, {delay: 0.8, left: -460})
      TweenMax.to(logo, 0.3, {delay: 0.3, transform: 'rotate(-90deg)', bottom: '80px', left: -26})
      tl.add(TweenMax.to(tray, 0.3, { width: 70 }))
    }
  },
}
