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
        deadline: deadline
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
