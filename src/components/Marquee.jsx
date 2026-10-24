import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from 'motion/react'
import { stack } from '../data'

// Two copies are enough for a seamless loop while one copy is wider than the screen.
const COPIES = 2
const wrap = (min, max, v) => {
  const r = max - min
  return ((((v - min) % r) + r) % r) + min
}

// An endless ticker at a steady pace. `speed` is in items per second (negative scrolls
// left), so the pace doesn't depend on how long the list is.
function Track({ items, speed, className }) {
  const reduce = useReducedMotion()
  const baseX = useMotionValue(0)
  const x = useTransform(baseX, (v) => `${wrap(-100 / COPIES, 0, v)}%`)

  useAnimationFrame((_, delta) => {
    if (reduce) return
    const percentPerSecond = (speed * 100) / (items.length * COPIES)
    baseX.set(baseX.get() + percentPerSecond * (delta / 1000))
  })

  return (
    <div className={`overflow-hidden py-2.5 ${className}`}>
      <motion.div className="flex w-max will-change-transform" style={{ x }}>
        {Array.from({ length: COPIES }, (_, c) => (
          <span key={c} className="flex shrink-0" aria-hidden={c > 0}>
            {items.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-6 pr-6 text-[clamp(1.2rem,2.4vw,2rem)] leading-[1.2] font-semibold tracking-[-0.03em] whitespace-nowrap"
              >
                {t}
                <svg
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  aria-hidden="true"
                  className="shrink-0 fill-accent-text opacity-70"
                >
                  <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
                </svg>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Marquee() {
  const reversed = [...stack].reverse()
  return (
    <section
      className="relative my-[clamp(32px,5vw,64px)] overflow-hidden border-y border-line py-[clamp(16px,2.4vw,28px)] [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
      aria-label="Tech I work with"
    >
      <Track items={stack} speed={-0.8} className="text-fg" />
      <Track items={reversed} speed={0.6} className="text-muted" />
    </section>
  )
}
