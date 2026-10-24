import { animate, motion, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import { about, highlights, stats } from '../data'
import { section } from '../ui'
import SectionHead from './SectionHead'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v)).padStart(2, '0') + suffix
      },
    })
    return () => controls.stop()
  }, [inView, value, suffix])

  return (
    <span
      className="text-[clamp(3.6rem,8vw,7.5rem)] leading-[0.9] font-semibold tracking-[-0.06em] tabular-nums"
      ref={ref}
    >
      00{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className={section}>
      <div className="wrap">
        <SectionHead index="01" label="About" title="Builder by default." />
        <p className="max-w-[1180px] text-[clamp(1.55rem,3.5vw,3.3rem)] leading-[1.16] font-medium tracking-[-0.035em]">
          {about}
        </p>
        <ul className="mt-[clamp(64px,9vw,120px)] grid grid-cols-3 border-t border-line max-md:grid-cols-1">
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              className="flex flex-col gap-3.5 border-r border-line px-7 pt-8 pb-2 first:pl-0 last:border-r-0 max-md:flex-row max-md:items-center max-md:justify-between max-md:gap-5 max-md:border-r-0 max-md:border-b max-md:px-0 max-md:py-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
            >
              <Counter value={s.value} suffix={s.suffix} />
              <span className="max-w-[24ch] text-[15px] text-muted max-md:text-right">{s.label}</span>
            </motion.li>
          ))}
        </ul>
        <ul className="mt-[clamp(40px,6vw,72px)] grid grid-cols-3 gap-8 border-t border-line pt-8 max-md:grid-cols-1 max-md:gap-6">
          {highlights.map((h, i) => (
            <motion.li
              key={h.label}
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
            >
              <span className="font-mono text-[12px] leading-[normal] tracking-[0.1em] text-accent-text uppercase">
                {h.label}
              </span>
              <ul className="grid gap-2 text-[15px] text-fg-2">
                {h.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
