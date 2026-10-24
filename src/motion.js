export const ease = [0.16, 1, 0.3, 1]

// Section titles: a plain fade. Trigger these from a parent.
export const reveal = {
  hidden: { opacity: 0 },
  show: (i = 0) => ({ opacity: 1, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.08 } }),
}

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.08 } }),
}
