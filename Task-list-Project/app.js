const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todolist');
const filter   = document.querySelector('.filter-input');

// Add event listener
todoButton.addEventListener('click', addtodo);
todoList.addEventListener('click', deletechecked);
filter.addEventListener('keyup', filterSearch);
document.addEventListener('DOMContentLoaded',gettodos)

// funtions
function addtodo(event){
    // prevent default funtions of browser
    event.preventDefault();
    // creating new div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // creating new li inside div
    const newtodo = document.createElement('li');
    newtodo.innerText = todoInput.value;
    if (todoInput.value == "") {
             alert("Please add some task");
             return;
         }
    newtodo.classList.add('todoitem');
    todoDiv.appendChild(newtodo);
    savelocaltodos(todoInput.value);
    // checked button
    const checkedbutton = document.createElement('button');
    checkedbutton.innerHTML ='<i class="fas fa-check-square"></i>'
    checkedbutton.classList.add('checked-btn')
    todoDiv.appendChild(checkedbutton);
    // trash button
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML ='<i class="fas fa-trash-alt"></i>'
    trashbutton.classList.add('trash-btn')
    todoDiv.appendChild(trashbutton);
    todoList.appendChild(todoDiv);
    // storeTaskInLocalStorage(todoInput.value);
    todoInput.value = "";
}
// For removing items
function deletechecked(event){
const item = event.target;
if(item.classList[0]==='trash-btn'){
    alert('Do you want to delete this task');
    const todo = item.parentElement;
    todo.remove();
    removeLocaltodos(todo);
}
if(item.classList[0]==='checked-btn'){
    item.parentElement.classList.add('trans');
}
}
function filterSearch(event){
    const currentElement = event.target;
  const filterInputValue = currentElement.value.toLowerCase();
  const collectionItems = document.querySelectorAll(".todo");
  if (collectionItems.length > 0) {
    collectionItems.forEach(function (singleItem) {
      const text = singleItem.textContent.toLowerCase();
      if (text.indexOf(filterInputValue) != -1) {
        singleItem.style.display = "flex";
      } else {
        singleItem.style.display = "none";
      }});}}

function savelocaltodos(todo){
  let todos;
  if(localStorage.getItem('todos')=== null){
    todos =[];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(todos));
}
function gettodos(todo){
  let todos;
  if(localStorage.getItem('todos')=== null){
    todos =[];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
   todos.forEach(function(todo){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // creating new li inside div
    const newtodo = document.createElement('li');
    newtodo.innerText = todo;
    newtodo.classList.add('todoitem');
    todoDiv.appendChild(newtodo);
    // checked button
    const checkedbutton = document.createElement('button');
    checkedbutton.innerHTML ='<i class="fas fa-check-square"></i>'
    checkedbutton.classList.add('checked-btn')
    todoDiv.appendChild(checkedbutton);
    // trash button
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML ='<i class="fas fa-trash-alt"></i>'
    trashbutton.classList.add('trash-btn')
    todoDiv.appendChild(trashbutton);
    todoList.appendChild(todoDiv);
   });
}
function removeLocaltodos(todo){
  let todos;
  if(localStorage.getItem('todos')=== null){
    todos =[];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText
  todos.splice(todos.indexOf(todoIndex),1);
  localStorage.setItem("todos",JSON.stringify(todos));
}