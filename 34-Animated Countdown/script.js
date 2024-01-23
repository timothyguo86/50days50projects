const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function runAnimation() {
  nums.forEach((num, idx) => {
    num.addEventListener('animationend', e => handleAnimationEnd(e, num, idx))
  })
}

replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})

function handleAnimationEnd(e, num, idx) {
  const { animationName } = e
  const nextToLast = nums.length - 1

  if (animationName === 'goIn' && idx !== nextToLast) {
    num.classList.remove('in')
    num.classList.add('out')
  } else if (animationName === 'goOut' && num.nextElementSibling) {
    num.nextElementSibling.classList.add('in')
  } else {
    setTimeout(() => {
      counter.classList.add('hide')
      finalMessage.classList.add('show')
    }, 300)
  }
}

function resetDOM() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')
  nums.forEach(num => (num.classList.value = ''))
  nums[0].classList.add('in')
}
