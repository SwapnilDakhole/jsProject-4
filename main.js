const formTodo = document.querySelector(".form-todo");
const inputText = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
const header = document.querySelector(".header");
const button = document.querySelector("#button");
// console.log(button)
// console.log(header)
const body = document.body;


const intervalId = setInterval(()=>{
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        const randomColor = `rgb(${red},${green},${blue})`;
        header.style.backgroundColor = randomColor;
},500);

button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.textContent = `Background color : ${header.style.backgroundColor}`
})


formTodo.addEventListener("submit",e=>{
    e.preventDefault();
    const newTodoText = inputText.value;
    const newLi = document.createElement('li');
    const newinnerHTML = `
     <span class="text">${newTodoText}</span>
     <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
     </div>
    `;
    newLi.innerHTML = newinnerHTML;
    todoList.append(newLi);
    inputText.value="";
});


todoList.addEventListener("click",e=>{
    // console.log(e.target)
    if (e.target.classList.contains("done")){
      const liSpan =  e.target.parentNode.previousElementSibling;
      liSpan.style.textDecoration = "line-through";
    }

    if(e.target.classList.contains("remove")){
        const li = e.target.parentNode.parentNode;
        li.remove();
    }
    // if (e.target.classList.contains("done")) {
    //     const liSpan = e.target.parentNode.previousElementSibling;
    //     liSpan.style.textDecoration = "line-through";
    //   }

    // if(e.target.classList.contains("done"){
    //     const liSpan = e.target.parentNode.per
    // })
})