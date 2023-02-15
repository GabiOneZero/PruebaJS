var todoBtn = document.getElementById("todo-btn");
var inProgressBtn = document.getElementById("inprogress-btn");
var testedBtn = document.getElementById("tested-btn");
var doneBtn = document.getElementById("done-btn");

var todoList = document.getElementById("todo");
var inProgressList = document.getElementById("in-progress");
var testedList = document.getElementById("tested");
var doneList = document.getElementById("done");

var templateTask = document.getElementById("templateTask")

var taskInput = document.getElementById("task")
var timekInput = document.getElementById("time")

var removeBtn = document.getElementById("removeTask-btn")

var taskContainer = document.getElementById("task-container")

console.log(removeBtn);

todoBtn.addEventListener("click", function () {
	newTask(todoBtn.id, taskInput.value, timekInput.value);
});
inProgressBtn.addEventListener("click", function () {
	newTask(inProgressBtn.id, taskInput.value, timekInput.value);
});
testedBtn.addEventListener("click", function () {
	newTask(testedBtn.id, taskInput.value, timekInput.value);
});
doneBtn.addEventListener("click", function () {
	newTask(doneBtn.id, taskInput.value, timekInput.value);
});



function newTask(selectedList, taskName, taskTime) {
	let listToAdd;

	switch (selectedList) {
		case "todo-btn":
			listToAdd = todoList;
			break;
		case "inprogress-btn":
			listToAdd = inProgressList;
			break;
		case "tested-btn":
			listToAdd = testedList;
			break;
		case "done-btn":
			listToAdd = doneList;
			break;

		default:
			break;
	}

    let newTaskElement = templateTask.cloneNode(true)

    if (taskName === '' || taskTime === '') {
        alert("You must write something!");
      } else {
        newTaskElement.firstElementChild.innerHTML = taskName 
        newTaskElement.firstElementChild.nextSibling.innerHTML = taskTime    
        listToAdd.appendChild(newTaskElement);
        newTaskElement.classList.remove("task-list--element")
      }

      taskInput.value = ""
      timekInput.value = ""
}

function removeTask(selfElement) {
    selfElement.parentElement.parentElement.style.display = "none"

}

var columnsArray = taskContainer.children
console.log("Array")
console.log(columnsArray)
function moveRight(selfElement) {
    selfElement.parentElement.parentElement.style.display = "none"
}

