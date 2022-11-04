//Variables

let taskContainer = document.querySelector('#task-container');
let inputTask = document.querySelector('#input-task');
let addTask = document.querySelector('#add-task');

// console.log(taskContainer)
// console.log(inputTask)
// console.log(addBtn)  

// Event Listener for Add Button

addTask.addEventListener('click', function() {
    
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === "") {
        alert('Please Enter a Task');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkButton.addEventListener('click', function() {
        if(li.style.textDecoration === 'line-through') li.style.textDecoration = 'none';
        else li.style.textDecoration = 'line-through'
    });

    deleteButton.addEventListener('click', function(e) {
        // let target = e.target;
        // console.log(e, 'e')
        // console.log(e.target, 'target');
        // console.log(target.parentElement, 'parent');
        // console.log(target.parentElement.parentElement, 'grandpa')
        // target.parentElement.parentElement.remove();

        //I found a video explaining why the solution above works but the I tested it
        //and I wondered why couldn't I just target task.. The function will use closure to only delete
        //the task created from within.
        task.remove();
    })
})