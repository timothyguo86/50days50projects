const IMG_URL = 'https://source.unsplash.com/random/'
const container = document.querySelector('.container')
const rows = 10

for (let i = 0; i < rows; i++) {
  const img = document.createElement('img')

  img.src = `${IMG_URL}${getRandomSize()}`
  container.append(img)
}

function getRandomSize() {
  return `${getRandomNum()}x${getRandomNum()}`
}

function getRandomNum() {
  return Math.floor(Math.random() * 20) + 300
}
