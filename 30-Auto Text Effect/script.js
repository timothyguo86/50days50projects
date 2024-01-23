const textEl = document.querySelector('#text')
const speedEl = document.querySelector('#speed')
const text = 'All work and no play makes Jack a dull boy.'
let speed = speedEl.value
let idx = 1

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)

  idx++
  if (idx > text.length) {
    idx = 1
  }

  setTimeout(() => writeText(), 200 / speed)
}

speedEl.addEventListener('change', () => (speed = speedEl.value))
