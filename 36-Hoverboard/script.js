const container = document.getElementById('container')
const lightnessEl = document.getElementById('lightness')

const SQUARES = 600
const DEFAULT_SQUARE_BG = '#1d1d1d'
const DEFAULT_SQUARE_BOX_SHADOW = '0 0 2px #000'

let lightness = lightnessEl.value

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')

  square.classList.add('square')
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))
  container.append(square)
}

function setColor(element) {
  const color = getRandomColor()

  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = DEFAULT_SQUARE_BG
  element.style.boxShadow = DEFAULT_SQUARE_BOX_SHADOW
}

function getRandomColor() {
  const randomHue = Math.floor(Math.random() * 360)
  const randomColor = `hsl(${randomHue}, 100%, ${lightness}%)`

  return randomColor
}

lightnessEl.addEventListener('input', e => (lightness = e.target.value))
