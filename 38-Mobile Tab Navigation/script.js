const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContent()
    hideAllItems()

    contents[idx].classList.add('show')
    item.classList.add('active')
  })
})

function hideAllContent() {
  contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
  listItems.forEach(item => item.classList.remove('active'))
}
