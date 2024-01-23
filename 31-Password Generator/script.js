const result = document.querySelector('#result')
const generateEl = document.querySelector('#generate')
const clipboardEl = document.querySelector('#clipboard')
const errorEl = document.querySelector('#error')
const toasts = document.querySelector('.toasts')

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
const numberChars = '0123456789'
const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?/'

const getRandomCharFuncMap = {
  lowercase: getRandomFunc(lowercaseChars),
  uppercase: getRandomFunc(uppercaseChars),
  numbers: getRandomFunc(numberChars),
  symbols: getRandomFunc(symbolChars)
}

function getRandomFunc(arr) {
  return () => arr[Math.floor(Math.random() * arr.length)]
}

generateEl.addEventListener('click', () => {
  const length = Number(document.querySelector('#length').value)
  const uppercase = document.querySelector('#uppercase').checked
  const lowercase = document.querySelector('#lowercase').checked
  const numbers = document.querySelector('#numbers').checked
  const symbols = document.querySelector('#symbols').checked

  result.innerText = generatePassword(length, uppercase, lowercase, numbers, symbols)
})

clipboardEl.addEventListener('click', () => {
  const password = result.textContent
  const textarea = document.createElement('textarea')
  const notif = document.createElement('div')

  if (!password) return

  textarea.value = password
  document.body.append(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()

  notif.classList.add('toast')
  notif.innerText = 'Password copied!'
  toasts.append(notif)
  setTimeout(() => {
    notif.remove()
  }, 2500)
})

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
  let generatedPassword = ''
  errorEl.style.visibility = 'hidden'

  const typesCount = uppercase + lowercase + numbers + symbols
  const typesArr = [{ uppercase }, { lowercase }, { numbers }, { symbols }].filter(item => Object.values(item)[0])

  if (typesCount === 0) {
    errorEl.style.visibility = 'visible'
    return ''
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const keyName = Object.keys(type)[0]

      generatedPassword += getRandomCharFuncMap[keyName]()
    })
  }

  return generatedPassword.slice(0, length)
}
