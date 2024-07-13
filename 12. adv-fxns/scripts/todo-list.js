const todoList = [];
const todoList2 = [];
const todoList3 = [{
  name: 'make meals',
  dueDate: '2015-03-01',
}, {
  name: 'take dump',
  dueDate: '2024-07-11',
}];

renderTodoList2();

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () =>  {
    addTodo3();
});

function renderTodoList2() {
  let todoListHTML = '';
  
  todoList3.forEach((todoObject, index) => {
    console.log(todoObject);
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div>
      <button class=" js-delete-todo-button delete-todo-button"
        onclick="
          todoList3.splice(${index}, 1);
          renderTodoList2();
      ">Delete</button>
    `;
    todoListHTML += html;
  });

    document.querySelector(
    '.js-todo-list2'
  ).innerHTML = todoListHTML;
}
/*
  The value 'index' is a closure in this function. This means that if a function has access to a value, it will always have access to that value. The value gets packaged together (enclosed) with the function
*/
document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList3.splice(index, 1);
          renderTodoList2();
    })
  });

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