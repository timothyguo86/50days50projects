const html = document.querySelector('html')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

toggle.addEventListener('click', e => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = `<i class="fa fa-moon"></i> Dark mode</span>`
  } else {
    html.classList.add('dark')
    e.target.innerHTML = `<i class="fa fa-sun"></i> Light mode</span>`
  }
})

setTime()
setInterval(setTime, 1000)

function setTime() {
  const time = new Date()

  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = time.getHours() % 12
  const minutes = time.getMinutes()
  const minutesForClock = minutes < 10 ? '0' + minutes : minutes
  const seconds = time.getSeconds()

  const ampm = hours >= 12 ? 'PM' : 'AM'

  hourEl.style.transform = `translate(-50%, -100%) rotate(${(hours / 12) * 360}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${(minutes / 60) * 360}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${(seconds / 60) * 360}deg)`

  timeEl.innerText = `${hoursForClock}: ${minutesForClock} ${ampm}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}
