const header = document.querySelector('#header')
const title = document.querySelector('#title')
const excerpt = document.querySelector('#excerpt')
const profile_img = document.querySelector('#profile_img')
const name = document.querySelector('#name')
const date = document.querySelector('#date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

// setTimeout(getData, 2000)

function getData() {
  header.innerHTML = `
    <img src="https://source.unsplash.com/featured/500x500" alt="placeholder image" />
    `
  title.innerText = 'Lorem ipsum dolor sit amet.'
  excerpt.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci aut distinctio fuga.'
  profile_img.innerHTML = `
    <img src="http://randomuser.me/api/portraits/men/45.jpg" alt="profile image" />
    `
  name.innerText = 'John Doe'
  date.innerText = 'Jan 21, 2024'

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach(text => text.classList.remove('animated-bg-text'))
}
