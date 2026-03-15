const submitButton = document.getElementById('submitTask');
const inputElement = document.getElementById('inputTask');
submitButton.addEventListener('click', function() {
  const inputValue = inputElement.value;
  
  const task = {
    title: inputValue,
    completed: false
  }

  fetch("http://localhost:8080/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(task)
  })
})