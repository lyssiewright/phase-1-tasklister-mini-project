document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTask(e.target.new_task_description.value)
    form.reset()

  })
})

function buildTask(task){
  let ul = document.createElement('ul')
  let bttn = document.createElement('button')
  bttn.addEventListener('click', handleDelete)
  ul.textContent = `${task} `
  bttn.textContent = 'x'
  ul.appendChild(bttn)
  document.querySelector('ul').appendChild(ul)
}

function  handleDelete(e){
  (e.target.parentNode.remove())
}
