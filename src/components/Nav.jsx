import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useEffect, useState } from 'react'
import { profile } from '../data'
import { pauseSmoothScroll } from '../smoothScroll'
import { btn, btnGhost, btnSm } from '../ui'
import Clock from './Clock'
import { GitHubIcon, ResumeIcon } from './Icons'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const ease = [0.76, 0, 0.24, 1]
const burgerLine = 'absolute right-[13px] left-[13px] h-[1.5px] bg-fg transition-transform duration-300'

export default function Nav() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 240)
    setScrolled(y > 24)
  })

  // The page behind the open menu stays still: `menu-open` on <html> for native scrolling,
  // and smooth scrolling paused. Done synchronously, so a menu link can scroll right away.
  const toggle = (next) => {
    setOpen(next)
    pauseSmoothScroll(next)
    document.documentElement.classList.toggle('menu-open', next)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      pauseSmoothScroll(false)
      document.documentElement.classList.remove('menu-open')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-80 flex h-(--nav-h) items-center border-b [transition:background-color_0.5s,border-color_0.5s,backdrop-filter_0.5s] ${
          scrolled ? 'border-line bg-nav backdrop-blur-[16px] backdrop-saturate-[140%]' : 'border-transparent'
        }`}
        animate={{ y: hidden && !open ? '-120%' : '0%' }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="wrap grid grid-cols-[1fr_auto_1fr] items-center gap-6 max-lg:grid-cols-[1fr_auto]">
          <a
            href="#top"
            className="inline-flex items-center gap-3 justify-self-start font-semibold tracking-[-0.01em]"
          >
            {/* The favicon itself, so the logo and the browser tab always match. */}
            <img
              src="/favicon.svg?v=3"
              alt=""
              width="36"
              height="36"
              className="size-9 rounded-lg ring-1 ring-white/12"
            />
            {profile.name}
          </a>

          <nav className="flex gap-[34px] text-[15px] text-fg-2 max-lg:hidden" aria-label="Primary">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors duration-300 hover:text-fg">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-[18px] justify-self-end">
            <Clock className="max-lg:hidden" />
            <ThemeToggle />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className={`${btn} ${btnSm} ${btnGhost} max-xs:hidden`}
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className={`${btn} ${btnSm} ${btnGhost} max-sm:hidden`}
            >
              <ResumeIcon />
              Resume
            </a>
            <button
              type="button"
              className="relative hidden size-11 rounded-full border border-line-2 max-lg:block"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => toggle(!open)}
            >
              <span
                className={`${burgerLine} top-[18px] ${open ? 'translate-y-[3px] rotate-45' : ''}`}
              />
              <span
                className={`${burgerLine} top-6 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-70 flex flex-col justify-between bg-card px-(--gutter) pt-[calc(var(--nav-h)_+_32px)] pb-(--gutter)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Mobile">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  className="flex items-baseline gap-3.5 pt-0.5 pb-1.5 text-[clamp(2.8rem,13vw,5rem)] leading-[1.02] font-semibold tracking-[-0.045em]"
                  href={l.href}
                  onClick={() => toggle(false)}
                >
                  <span className="font-mono text-[13px] leading-[normal] font-normal tracking-normal text-accent-text">
                    0{i + 1}
                  </span>
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-line pt-5 font-mono text-[13px] leading-[normal] text-fg-2">
              <span className="flex gap-5">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href={profile.leetcode} target="_blank" rel="noreferrer">
                  LeetCode ↗
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
                <a href={profile.resume} target="_blank" rel="noreferrer">
                  Resume ↗
                </a>
              </span>
              <Clock />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
