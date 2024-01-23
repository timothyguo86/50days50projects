const addBtn = document.querySelector('.add')
const notes = JSON.parse(localStorage.getItem('notes'))

localStorage.setItem(
  'notes',
  JSON.stringify([
    "### What is the difference between ignorance and apathy?\n\nI don't know and I don't care.",
    "- [ ] Remember to buy groceries today.\n- [x] Finish reading the new book.\n- [x] Call mom and wish her a happy birthday!\n- [x] Prepare for the upcoming meeting.\n- [ ] Take a break and go for a walk.\n- [x] Learn a new programming concept.\n- [ ] Write in your journal before bedtime.\n- [ ] Practice playing the guitar for at least 30 minutes.\n- [ ] Plan a weekend getaway with friends.\n- [x] Start a new project you\\'ve been thinking about",
    '### Shopping List\n\n- Milk\n- Eggs\n- Sugar\n- Flour\n'
  ])
)

if (notes) notes.forEach(note => addNewNote(note))

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')
  note.innerHTML = `
    <div class="tools">
      <button class="edit"><i class="fa fa-edit"></i></button>
      <button class="delete"><i class="fa fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
  `

  const editBtn = note.querySelector('.edit')
  const deleteBtn = note.querySelector('.delete')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('textarea')

  textArea.value = text
  main.innerHTML = marked.parse(text)

  deleteBtn.addEventListener('click', () => {
    note.remove()
    updateLS()
  })

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
    textArea.focus()
  })

  textArea.addEventListener('input', e => {
    const { value } = e.target
    main.innerHTML = marked.parse(value)
    updateLS()
  })

  document.body.append(note)
}

function updateLS() {
  const notesText = document.querySelectorAll('textarea')
  const notes = []

  notesText.forEach(note => notes.push(note.value))
  localStorage.setItem('notes', JSON.stringify(notes))
}
