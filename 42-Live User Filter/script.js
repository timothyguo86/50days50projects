const result = document.querySelector('#result')
const filter = document.querySelector('#filter')
const API_URL = 'https://randomuser.me/api/'
const listItems = []

getData()

filter.addEventListener('input', e => filterData(e.target.value))

function getData() {
  fetch(`${API_URL}?results=50`)
    .then(res => res.json())
    .then(data => {
      result.innerHTML = ''

      data.results.forEach(user => {
        const li = document.createElement('li')
        li.innerHTML = `
          <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" />
          <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city} ${user.location.country}</p>
          </div>
        `

        listItems.push(li)
        result.append(li)
      })
    })
}

function filterData(searchTerm) {
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}
