const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', e => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive()
    selectedRating = e.target.closest('.rating').dataset.rating
    e.target.closest('.rating').classList.add('active')
  }
})

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
    <i class="fa fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `
})

function removeActive() {
  ratings.forEach(rating => rating.classList.remove('active'))
}
