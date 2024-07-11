const todoList = [];
const todoList2 = [];
const todoList3 = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  
  for (let i = 0; i < todoList2.length; i++) {
    const todo = todoList2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

    document.querySelector(
    '.js-todo-list'
  ).innerHTML = todoListHTML;
}
function addTodo2() {
  const input = document.querySelector('.js-name-input2');
  todoList2.push(input.value);

  input.value = '';

  renderTodoList();
}
function addTodo() {
  const input = document.querySelector('.js-name-input');
  todoList.push(input.value);
  console.log(todoList);

  input.value = '';
}