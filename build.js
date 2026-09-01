/* Build de production : minifie script.js/style.css avec un nom versionné
   par hash de contenu (cache-busting automatique), copie le reste tel quel
   dans dist/. Utilisé par le workflow GitHub Actions de déploiement. */

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const { execFileSync } = require('child_process')

const ROOT = __dirname
const DIST = path.join(ROOT, 'dist')
const BIN = path.join(ROOT, 'node_modules', '.bin')

const HTML_FILES = [
  'index.html', 'rechercheareas.html', 'publications.html',
  'logiciels.html', 'formation.html', 'actualites.html',
]
const COPY_ITEMS = ['public', 'robots.txt', 'sitemap.xml', 'rss.xml']

function clean(dir) {
  fs.rmSync(dir, { recursive: true, force: true })
  fs.mkdirSync(dir, { recursive: true })
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true })
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry))
    }
  } else {
    fs.copyFileSync(src, dest)
  }
}

function hashOf(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 10)
}

function build() {
  clean(DIST)

  const jsTmp = path.join(DIST, '__script.tmp.js')
  execFileSync(path.join(BIN, 'terser'), ['script.js', '-c', '-m', '-o', jsTmp], { cwd: ROOT })
  const jsMin = fs.readFileSync(jsTmp)
  const jsName = `script.${hashOf(jsMin)}.min.js`
  fs.renameSync(jsTmp, path.join(DIST, jsName))

  const cssTmp = path.join(DIST, '__style.tmp.css')
  execFileSync(path.join(BIN, 'lightningcss'), ['--minify', 'style.css', '-o', cssTmp], { cwd: ROOT })
  const cssMin = fs.readFileSync(cssTmp)
  const cssName = `style.${hashOf(cssMin)}.min.css`
  fs.renameSync(cssTmp, path.join(DIST, cssName))

  for (const item of COPY_ITEMS) {
    const src = path.join(ROOT, item)
    if (fs.existsSync(src)) copyRecursive(src, path.join(DIST, item))
  }

  for (const file of HTML_FILES) {
    let html = fs.readFileSync(path.join(ROOT, file), 'utf8')
    html = html.replace(/style\.css(\?[^"]*)?/g, cssName)
    html = html.replace(/script\.js(\?[^"]*)?/g, jsName)
    fs.writeFileSync(path.join(DIST, file), html)
  }

  console.log(`Build OK -> dist/ (${jsName}, ${cssName})`)
}

build()
