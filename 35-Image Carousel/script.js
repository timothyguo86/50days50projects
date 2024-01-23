const imgs = document.querySelector('#imgs')
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')
const img = imgs.querySelectorAll('img')
const IMG_CONTAINER_WIDTH = 500
const DELAY = 2000

let idx = 0
let interval = setInterval(run, DELAY)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  if (idx > img.length - 1) idx = 0
  else if (idx < 0) idx = img.length - 1

  imgs.style.transform = `translateX(${-idx * IMG_CONTAINER_WIDTH}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, DELAY)
}

function handleButtonClick(direction) {
  idx += direction
  changeImage()
  resetInterval()
}

rightBtn.addEventListener('click', () => handleButtonClick(1))
leftBtn.addEventListener('click', () => handleButtonClick(-1))
