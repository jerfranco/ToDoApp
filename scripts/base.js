// Get button element that submits tasks
const submitButton = document.getElementById('submitTask');

// Get input element
const inputElement = document.getElementById('inputTask');

const displayTaskItems = document.getElementById('displayTasks')

// Eventlistener for clicking the submit element button
submitButton.addEventListener('click', function() {
  const inputValue = inputElement.value;
  
  // Create a task object. I am storing two values in task
  const task = {
    title: inputValue,
    completed: false
  }

  // Creating data
  fetch("http://localhost:8080/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(task)
  })
  
  // Clearing input field after task submits
  .then( () => {
    inputElement.value = "";
  })
  
})

const displayTasks = () => {

  displayTaskItems.innerHTML = "";

  fetch("http://localhost:8080/tasks", {
    method: "GET",
  })

  .then(response => response.json())
  
  .then(data => data.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element.title;
    displayTaskItems.appendChild(li);
  }));

  
}

displayTasks();