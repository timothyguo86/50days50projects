// Placeholder todos
localStorage.setItem(
  'todos',
  JSON.stringify([
    {
      text: 'Task 1: Complete Homework Assignmen',
      completed: false
    },
    {
      text: 'Task 2: Grocery Shopping',
      completed: false
    },
    {
      text: 'Task 3: Exercise Routine',
      completed: true
    }
  ])
)
const todos = JSON.parse(localStorage.getItem('todos'))
const form = document.querySelector('#form')
const input = document.querySelector('#input')
const todosUl = document.querySelector('#todos')

if (todos) todos.forEach(todo => addTodo(todo))

form.addEventListener('submit', e => {
  e.preventDefault()
  addTodo()
})

function addTodo(todo) {
  let todoText = todo ? todo.text : input.value.trim()

  if (todoText) {
    const todoEl = document.createElement('li')

    todoEl.innerText = todoText
    if (todo && todo.completed) todoEl.classList.add('completed')

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateLS()
    })
    todoEl.addEventListener('contextmenu', e => {
      e.preventDefault()
      todoEl.remove()
      updateLS()
    })
    todosUl.append(todoEl)
    input.value = ''
  }

  updateLS()
}

function updateLS() {
  const todoELs = document.querySelectorAll('li')
  const todos = Array.from(todoELs).map(todoEL => ({
    text: todoEL.innerText,
    completed: todoEL.classList.contains('completed')
  }))

  localStorage.setItem('todos', JSON.stringify(todos))
}
