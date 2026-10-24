import { motion } from 'motion/react'
import { useState } from 'react'
import { claudeCredit, projectFilters, projects } from '../data'
import { btn, btnAccent, btnGhost, btnSm, dot, section, tag, tags } from '../ui'
import useStoreStats from '../useStoreStats'
import { ArrowIcon, GitHubIcon, SparkIcon, UsersIcon } from './Icons'
import SectionHead from './SectionHead'

const countFor = (filter) =>
  filter === 'All' ? projects.length : projects.filter((p) => p.categories.includes(filter)).length

// Only offer filters that at least one project uses.
const filters = projectFilters.filter((f) => countFor(f) > 0)

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))

  return (
    <section id="work" className={section}>
      <div className="wrap">
        <SectionHead index="04" label="Selected work" title="Things I’ve built.">
          <div
            className="flex flex-wrap gap-1 rounded-full border border-line bg-chip p-[5px] max-sm:max-w-full max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:[scrollbar-width:none]"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`relative isolate inline-flex h-[38px] shrink-0 items-center gap-2 rounded-full px-4 text-[14px] font-medium transition-colors duration-300 ${
                  filter === f ? 'text-page' : 'text-fg-2 hover:text-fg'
                }`}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {filter === f && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 -z-1 rounded-[inherit] bg-fg"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span>{f}</span>
                <span className="font-mono text-[11px] leading-[normal] font-medium opacity-60">
                  {countFor(f)}
                </span>
              </button>
            ))}
          </div>
        </SectionHead>
        <div className="flex flex-col gap-6">
          {shown.map((p) => (
            <Card key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

const stat =
  'inline-flex items-center gap-1.5 rounded-full border border-accent-line bg-accent-soft px-3 py-[5px] text-[13px] font-medium text-fg'

// Live numbers from the Chrome Web Store; hidden until they load, or if they can't.
function StoreStats({ id }) {
  const stats = useStoreStats(id)
  if (!stats?.users) return null
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      <span className={stat}>
        <span className="text-accent-text">
          <UsersIcon />
        </span>
        {stats.users} {stats.users === '1' ? 'user' : 'users'}
      </span>
      <span
        className="ml-1 inline-flex items-center gap-2 font-mono text-[11px] leading-[normal] tracking-[0.08em] text-muted uppercase"
        title="Refreshed about every 30 minutes"
      >
        <span className={`${dot} size-1.5`} aria-hidden="true" />
        Live from Chrome Web Store
      </span>
    </div>
  )
}

function Card({ project: p }) {
  const primary = p.live ?? p.repo

  return (
    <motion.article
      className="grid grid-cols-[1fr_1.15fr] items-center gap-[clamp(24px,4vw,56px)] rounded-(--radius) border border-line bg-card p-[clamp(22px,3.2vw,44px)] [box-shadow:var(--card-shadow)] max-xl:grid-cols-1"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex min-h-0 flex-col">
        <div className="flex justify-between font-mono text-[13px] leading-[normal] tracking-[0.08em] text-muted uppercase">
          <span className="text-accent-text">{String(projects.indexOf(p) + 1).padStart(2, '0')}</span>
          <span>{p.kind}</span>
        </div>
        <h3 className="pt-7 text-[clamp(2rem,3.8vw,3.5rem)] leading-none font-semibold tracking-[-0.045em] max-xl:pt-[18px]">
          {p.name}
        </h3>
        <p className="mt-4 max-w-[48ch] text-[clamp(0.97rem,1.05vw,1.05rem)] text-fg-2">{p.blurb}</p>
        <ul className={`${tags} mt-5`}>
          {p.tags.map((t) => (
            <li key={t} className={tag}>
              {t}
            </li>
          ))}
        </ul>
        {p.storeId && <StoreStats id={p.storeId} />}
        <div className="mt-6 flex flex-wrap gap-2.5">
          <a href={p.repo} target="_blank" rel="noreferrer" className={`${btn} ${btnSm} ${btnGhost}`}>
            <GitHubIcon />
            Source
          </a>
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className={`${btn} ${btnSm} ${btnAccent}`}>
              {p.liveLabel ?? 'Live site'}
              <ArrowIcon />
            </a>
          )}
        </div>
        {p.madeWithClaude && (
          <p className="mt-[26px] flex items-center gap-3 border-t border-line pt-5">
            <span
              className="grid size-9 place-items-center rounded-full border border-accent-line bg-accent-soft text-accent-text"
              aria-hidden="true"
            >
              <SparkIcon />
            </span>
            <span>
              <span className="block font-mono text-[11px] leading-[1.2] font-medium tracking-[0.1em] text-accent-text uppercase">
                {claudeCredit.label}
              </span>
              <span className="mt-[5px] block text-[15px] text-fg">{claudeCredit.note}</span>
            </span>
          </p>
        )}
      </div>

      {/* A screenshot of the project, linking to the live site (or the code when there's none). */}
      <a
        className="block overflow-hidden rounded-[16px] border border-line max-xl:-order-1"
        href={primary}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={p.image}
          alt={`Screenshot of ${p.name}`}
          width="1400"
          height="731"
          loading="lazy"
          decoding="async"
          className="aspect-[1400/731] w-full object-cover object-top"
        />
      </a>
    </motion.article>
  )
}
