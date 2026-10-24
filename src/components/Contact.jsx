import { motion } from 'motion/react'
import { profile, site } from '../data'
import { ease, fadeUp, reveal } from '../motion'
import { btn, btnGhost, btnSm, emphasis, eyebrow, titleMask } from '../ui'
import Clock from './Clock'
import EmailButton from './EmailButton'
import { BriefcaseIcon, CodeIcon, GitHubIcon, ResumeIcon } from './Icons'

const inView = { once: true, margin: '-10% 0px' }

// The big name in the footer: each letter rises into view, one after another.
const letter = {
  hidden: { y: '100%' },
  show: (i) => ({ y: '0%', transition: { duration: 0.7, ease, delay: i * 0.025 } }),
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-line pt-[clamp(80px,10vw,150px)]"
    >
      <div
        className="pointer-events-none absolute top-[35%] left-1/2 -z-1 aspect-square w-[min(1000px,140vw)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,var(--accent-glow),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="wrap">
        <motion.div initial="hidden" whileInView="show" viewport={inView}>
          <motion.p className={eyebrow} variants={fadeUp}>
            <span className="text-accent-text">(05)</span> Contact
          </motion.p>
          <h2 className="mt-6 text-[clamp(3rem,10.5vw,10.5rem)] leading-[0.9] font-semibold tracking-[-0.055em]">
            <span className={titleMask}>
              <motion.span className="block" variants={reveal} custom={0}>
                Got an idea?
              </motion.span>
            </span>
            <span className={titleMask}>
              <motion.span className="block" variants={reveal} custom={1}>
                Let’s <em className={emphasis}>build</em> it.
              </motion.span>
            </span>
          </h2>
        </motion.div>

        <div className="mt-[clamp(40px,6vw,72px)] flex items-center justify-between gap-10 max-md:flex-col max-md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="max-w-[40ch] text-[clamp(1.05rem,1.35vw,1.22rem)] text-fg-2">
              Always happy to talk shop — interesting problems, side projects, or just good
              engineering. My code lives on GitHub, my problem-solving on LeetCode, and my career on
              LinkedIn.
            </p>
            <div className="mt-[26px] flex flex-wrap gap-2.5">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className={`${btn} ${btnSm} ${btnGhost}`}
              >
                <GitHubIcon />
                @{profile.githubHandle}
              </a>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
                className={`${btn} ${btnSm} ${btnGhost}`}
              >
                <CodeIcon />
                LeetCode · {profile.leetcodeHandle}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`${btn} ${btnSm} ${btnGhost}`}
              >
                <BriefcaseIcon />
                LinkedIn
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className={`${btn} ${btnSm} ${btnGhost}`}
              >
                <ResumeIcon />
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={inView}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <EmailButton />
          </motion.div>
        </div>
      </div>

      <footer className="mt-[clamp(80px,12vw,160px)]">
        <motion.p
          className="flex justify-center px-(--gutter) text-[clamp(3rem,15vw,17rem)] leading-[0.82] font-bold tracking-[-0.065em] whitespace-nowrap [mask-image:linear-gradient(to_bottom,#000_35%,rgba(0,0,0,0.15)_100%)]"
          aria-hidden="true"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -5% 0px' }}
        >
          {[...profile.name].map((ch, i) => (
            <span className="block overflow-hidden pb-[0.04em]" key={i}>
              <motion.span className="block" variants={letter} custom={i}>
                {ch === ' ' ? '\u00A0' : ch}
              </motion.span>
            </span>
          ))}
        </motion.p>
        <div className="wrap mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-[26px] pb-[30px] font-mono text-[12px] leading-[normal] tracking-[0.06em] text-muted uppercase">
          <span>
            © {new Date().getFullYear()} {profile.name} · {site.name}
          </span>
          <span className="max-sm:hidden">Built with React &amp; Tailwind</span>
          <Clock />
          <a href="#top" className="inline-flex gap-1.5 text-fg hover:text-accent-text">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  )
}
