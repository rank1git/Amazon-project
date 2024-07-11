const todoList = [];
const todoList2 = [];
const todoList3 = [];

renderTodoList2();

function renderTodoList2() {
  let todoListHTML = '';
  
  for (let i = 0; i < todoList3.length; i++) {
    const todoObject = todoList3[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    
    console.log(todoObject);
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div>
      <button class="delete-todo-button"
        onclick="
          todoList3.splice(${i}, 1);
          renderTodoList2();
      ">Delete</button>
    `;
    todoListHTML += html;
  }

    document.querySelector(
    '.js-todo-list2'
  ).innerHTML = todoListHTML;
}
function renderTodoList() {
  let todoListHTML = '';
  
  for (let i = 0; i < todoList2.length; i++) {
    const todo = todoList2[i];
    const html = `
    <p>${todo}</p>`;
    todoListHTML += html;
  }

    document.querySelector(
    '.js-todo-list'
  ).innerHTML = todoListHTML;
}
function addTodo3() {
  const nameInput = document.querySelector('.js-name-input3');
  const name = nameInput.value;
  console.log(name);
  const dueDateInput = document.querySelector('.js-date-input');
  const dueDate = dueDateInput.value;

  todoList3.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate 
  });

  nameInput.value = '';

  renderTodoList2();
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