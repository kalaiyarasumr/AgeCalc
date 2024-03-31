
// Get the modal
var modal = document.getElementById('welcomeModal');

// Get the close button
var closeButton = document.getElementsByClassName('close')[0];

// When the page loads, show the modal
window.onload = function() {
    modal.style.display = 'block';
}

// Close the modal when the close button is clicked or when clicking outside the modal
closeButton.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
// Function to handle form submission and todo list updates
document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('todoInput').value;
    var birthdate = document.getElementById('birthdate').value;
    var currentDate = document.getElementById('currentDate').value;
    var todoList = document.getElementById('todoList');
    
    // Create a new list item
    var todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    // Make the todo item editable on click
    todoItem.addEventListener('click', function() {
        var newName = prompt('Enter new name:', name);
        if (newName !== null) {
            name = newName;
            updateTodoItemText(); // Update the text of the todo item
        }
    });

    // Update the text content of the todo item
    function updateTodoItemText() {
        todoItem.textContent = name + ' - Birthdate: ' + birthdate + ' - Age: ' + calculateAge(birthdate, currentDate);
    }

    // Update the text content of the todo item initially
    updateTodoItemText();

    // Append the todo item to the todo list
    todoList.appendChild(todoItem);

    // Store the user's birthdate in localStorage
    localStorage.setItem('userBirthdate', birthdate);

    // Clear the input fields
    document.getElementById('todoInput').value = '';
    document.getElementById('birthdate').value = '';
    document.getElementById('currentDate').value = '';
});

// Function to calculate age
function calculateAge(birthdate, currentDate) {
    var birthDate = new Date(birthdate);
    var currentDate = new Date(currentDate);
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var month = currentDate.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
