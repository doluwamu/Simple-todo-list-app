const todoInput = document.querySelector(".todo-input");
const todoPostButton = document.querySelector(".todo-btn-post");
const todoContents = document.querySelector(".todo__contents");
const todoContent = document.getElementsByClassName("todo__content");
const todoForm = document.querySelector(".todo__form");

todoPostButton.addEventListener("click", () => postTodo());

const submit = (e) => {
  e.preventDefault();
  postTodo();
};

todoForm.addEventListener("submit", submit);

let t = "";

const todoFunc = () => {
  if (todoInput && todoInput.value !== "") {
    t = todoInput.value;
    let todo = document.createElement("p");
    todo.classList.add("todo__content");
    let todoItem = `
    <p class='todo__value' onclick='editTodo(event)'>${t}</p>
    <button class='delete-todo' onclick='deleteTodo(event)'>Delete</button>
    <hr />`;
    todo.innerHTML = todoItem;
    todoContents.append(todo);

    clearInput();
  }
};

const postTodo = () => {
  todoFunc();
};

const deleteTodo = (e) => {
  const button = e.target;
  const todoToDelete = button.parentElement;
  todoToDelete.remove();
};

const editTodo = (event) => {
  const todos = event.target.innerHTML;
  const val = document.getElementsByClassName("todo__value");
  const valArr = [...val];
  let a = 0;
  valArr.map(() => {
    a = valArr.findIndex((vr) => vr.innerHTML === todos);
  });
  const q = val[a].innerHTML;
  todoInput.value = q;
  todoContent[a].remove();
};
const clearInput = () => {
  if (todoInput && todoInput.value !== "") {
    todoInput.value = "";
  }
};
