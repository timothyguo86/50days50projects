const hiddenItems = document.querySelectorAll('.hiddenItem')
const windowPortion = 0.8

window.addEventListener('scroll', checkHiddenItems)

checkHiddenItems()

function checkHiddenItems() {
  const triggerBottom = window.innerHeight * windowPortion

  hiddenItems.forEach((hiddenItem) => {
    const hiddenItemTop = hiddenItem.getBoundingClientRect().top
    hiddenItemTop < triggerBottom ? hiddenItem.classList.add('show') : hiddenItem.classList.remove('show')
  })
}
