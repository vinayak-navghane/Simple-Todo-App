      
let input = document.getElementById("input-box")
let listContainer = document.getElementById("list-container")

function addTodo(){
  
  if(input.value === ''){
    alert("Please enter a todo")
  }else{
  let li = document.createElement("li")  
    li.innerHTML = input.value
    li.innerHTML += ' <button id="delete-todo" onclick="deleteTodo(this)">delete</button>';
    listContainer.appendChild(li)
  document.getElementById("input-box").value = ""
  }
}

function deleteTodo(element){
  console.log(element)
  element.parentNode.remove();
}

function deleteAllTodos(){
    console.log(listContainer)
  listContainer.remove();
}