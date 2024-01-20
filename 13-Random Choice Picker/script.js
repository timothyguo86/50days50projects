const tagsEl = document.querySelector('#tags')
const textarea = document.querySelector('#textarea')
const highlightSpan = 100

textarea.focus()

textarea.addEventListener('keyup', handleKeyUp)

function handleKeyUp(e) {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
      textarea.disabled = true
    }, 10)
    randomSelect()
  }
}

function createTags(input) {
  const tags = input
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag !== '')

  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 30
  const int = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)
    setTimeout(() => unHighlightTag(randomTag), highlightSpan)
  }, highlightSpan)

  setTimeout(() => {
    clearInterval(int)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
      textarea.disabled = false
    }, highlightSpan)
  }, times * highlightSpan)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
