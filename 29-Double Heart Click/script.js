const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let loveTimes = 0
times.innerText = loveTimes

loveMe.addEventListener('dblclick', e => {
  loveTimes++
  times.innerText = loveTimes

  createHeart(e)
})

function createHeart(e) {
  const heart = document.createElement('i')
  heart.classList.add('fa', 'fa-heart')

  heart.style.left = `${e.clientX - e.target.offsetLeft}px`
  heart.style.top = `${e.clientY - e.target.offsetTop}px`

  loveMe.append(heart)
  setTimeout(() => heart.remove(), 1000)
}
