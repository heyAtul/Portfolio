import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Light smooth scrolling for the whole page, with Lenis. Mouse wheel and trackpad
// glide a little; touch screens keep their native scrolling. In-page links (#work, …)
// glide too (`anchors`).
let lenis = null

// Starts it, unless the visitor prefers reduced motion. Returns a cleanup function.
export function startSmoothScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  lenis = new Lenis({ autoRaf: true, lerp: 0.14, anchors: true })
  return () => {
    lenis?.destroy()
    lenis = null
  }
}

// Holds the page still while the mobile menu is open.
export function pauseSmoothScroll(paused) {
  if (paused) lenis?.stop()
  else lenis?.start()
}
