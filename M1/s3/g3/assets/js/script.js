function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskName = taskInput.value.trim();

    if (taskName !== '') {
    
    let taskList = document.getElementById('taskList');
    
    let li = document.createElement('li');
        li.textContent = taskName;
        li.addEventListener('click', function() {
        li.classList.toggle('task-completed');
    });
    
    let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
    }
    
    document.getElementById('taskInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
      })
    }