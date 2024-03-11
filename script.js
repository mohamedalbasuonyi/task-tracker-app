// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array called "tasks".
// TODO: Call the render function to update the table with the new tasks.

// Section 2: App State Variables
let tasks = [];

// Section 3: Cached Element References
const taskForm = document.getElementById('taskForm');
const taskTable = document.getElementById('taskTable');
const taskNameInput = document.getElementById('taskName');
const taskDescriptionInput = document.getElementById('taskDescription');
const taskDeadlineInput = document.getElementById('taskDeadline');

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // Get form input values
    const name = taskNameInput.value;
    const description = taskDescriptionInput.value;
    const deadline = taskDeadlineInput.value;
    
    // Validate input fields
    if (!name || !description || !deadline) {
        alert('Please fill out all fields.');
        return;
    }
    
    // Update the tasks array
    tasks.push({
        name: name,
        description: description,
        deadline: deadline,
        completed: false // Adding the completed property
    });
    
    render();
    
    // Reset form fields
    taskForm.reset();
}


// Function to render tasks in the table
function render() {
    taskTable.innerHTML = tasks.map(task => `
    <tr>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
        <td><button onclick="markTaskComplete(this)">Complete</button></td>
        <td><button onclick="removeTask(this)">Remove</button></td>
    </tr>
`).join('');
}

// Function to initialize the table
function init() {
    render();
}

// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

// Call the init function to set up the initial state of the app
init();

// Function to mark a task as complete
function markTaskComplete(button) {
    console.log('markTaskComplete function called');
    // Find the closest <tr> element containing the button
    const row = button.closest('tr');
    
    // Find the index of the row within the table
    const index = Array.from(row.parentNode.children).indexOf(row);
    
    // Check if index is valid
    if (index === -1) {
        console.error('Error: Invalid row index');
        return;
    }

    // Log the task before updating
    console.log('Task before update:', tasks[index]);

    // Update the task status 
    tasks[index].completed = true;

    // Log the task after updating
    console.log('Task after update:', tasks[index]);

    // Re-render the tasks
    render();
}



// Function to remove a task
function removeTask(button) {
    // Find the index of the task in the tasks array
    const index = button.parentNode.parentNode.rowIndex - 1; // Adjusting for the header row
    
    // Remove the task from the tasks array
    tasks.splice(index, 1);

    // Re-render the tasks
    render();
}

