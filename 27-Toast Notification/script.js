const button = document.querySelector('.btn')
const toasts = document.querySelector('.toasts')

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four', 'Some other super duper long Message']
const types = ['', 'success', 'info', 'warn', 'error']

button.addEventListener('click', () => createNotification(getRandomMessage(), getRandomType(), 3000))

function createNotification(message, type = null, delay = null) {
  const notif = document.createElement('div')

  notif.classList.add('toast')
  if (type === 'info') notif.classList.add('info')
  else if (type === 'success') notif.classList.add('success')
  else if (type === 'warn') notif.classList.add('warn')
  else if (type === 'error') notif.classList.add('error')

  notif.innerText = message
  toasts.append(notif)

  if (delay) {
    setTimeout(() => {
      notif.remove()
    }, delay)
  }
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
