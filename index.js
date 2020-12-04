const todoInput = document.querySelector(".todo-input");
const todoPostButton = document.querySelector(".todo-btn-post");
const todoContents = document.querySelector(".todo__contents");
const todoContent = document.querySelector(".todo__content");
const todoForm = document.querySelector(".todo__form");

todoPostButton.addEventListener("click", () => postTodo());

const submit = (e) => {
  e.preventDefault();
  postTodo();
};

todoForm.addEventListener("submit", submit);

const postTodo = () => {
  if (todoInput && todoInput.value !== "") {
    let todo = document.createElement("p");
    todo.classList.add("todo__content");
    let todoItem = `
    <p class='todo__value'>${todoInput.value}</p>
    <button class='delete-todo' onclick='deleteTodo(event)'>Delete</button> 
    <div class='update__section'>
      <input type="text" class='update-input' /> 
    </div>
    <hr />`;
    todo.innerHTML = todoItem;
    todoContents.append(todo);

    clearInput();
  }
};

const deleteTodo = (e) => {
  const button = e.target;
  const todoToDelete = button.parentElement;
  todoToDelete.remove();
};

// const editTodo = (e) => {
//   const clicked = e.target;
//   const updateSection = document.querySelector(".update__section");
//   const updateInput = document.querySelector(".update-input");
//   updateSection.style.display = "block";
//   updateInput.value = clicked.innerHTML;
// };

// const updateTodo = () => {
//   const updateSection = document.querySelector(".update__section");
//   const updateInput = document.querySelector(".update-input");
//   const todoValue = document.querySelector(".todo__value");
//   todoValue.innerHTML = updateInput.value;
//   updateSection.style.display = "none";
// };

const clearInput = () => {
  if (todoInput && todoInput.value !== "") {
    todoInput.value = "";
  }
};
