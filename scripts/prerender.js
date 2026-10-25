// Runs after `vite build` (see the "build" script in package.json).
// It puts the page's HTML and the structured data into dist/index.html,
// so search engines can read everything without running JavaScript.
import fs from 'node:fs'
import { render, structuredData } from '../dist-ssr/entry-server.js'

// 1. Read the page Vite just built. Its <div id="root"> is still empty.
let html = fs.readFileSync('dist/index.html', 'utf8')

// 2. Fill it with the app's HTML. (The `() =>` keeps any `$` in the text as-is.)
html = html.replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`)

// 3. Add the structured data to <head>. (Escaping `<` stops the text from closing the tag early.)
const json = JSON.stringify(structuredData()).replace(/</g, '\\u003c')
html = html.replace('</head>', () => `<script type="application/ld+json">${json}</script></head>`)

// 4. Save it, and delete the temporary server build.
fs.writeFileSync('dist/index.html', html)
fs.rmSync('dist-ssr', { recursive: true, force: true })
console.log('prerender: done')
