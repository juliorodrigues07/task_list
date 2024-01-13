let dummyTasks = 
[
	{name: 'Andar de bike', period: 'Dia'},
	{name: 'Pesquisar preços de PC', period: 'Dia'},
	{name: 'Estudar para a prova', period: 'Dia'},
	{name: 'Lorem ipsum is simply dummy text', period: 'Dia'},
	{name: 'Lorem ipsum is simply dummy text', period: 'Dia'},
	{name: 'Estudar inglês', period: 'Noite'},
	{name: 'Verificar emails', period: 'Noite'},
	{name: 'Continuar a ler o livro', period: 'Noite'},
	{name: 'Lorem ipsum is simply dummy text', period: 'Noite'},
	{name: 'Lorem ipsum is simply dummy text', period: 'Noite'}
];

let tasks = dummyTasks;
const localTasks = JSON.parse(localStorage.getItem('tasks'));

if (JSON.parse(localStorage.getItem('tasks')).length != 0)
	tasks = localTasks;
else
	tasks = dummyTasks;

const updateLocalStorage = () => 
{
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

const clearField = () =>
{
	document.getElementById('new-task').value = '';
};

loadData();

function loadData()
{
	// Loads and displays on page any possible previous tasks stored locally
	tasks.forEach(task => {

		let table, period;
		if (task.period === 'Dia')
		{
			table = document.getElementsByClassName('day-tasks')[0];
			period = 'day';
		}
		else
		{
			table = document.getElementsByClassName('night-tasks')[0];
			period = 'night';
		}

		let row = table.querySelector('ol');

		// TODO: Clean this with proper creation (createElement, add, onclick, appendChild, ...)
		row.innerHTML += `<li>
					${task.name}
					<input type="checkbox" id="done" name="done"/>
					<div class="button-cont">
						<button class="delete-${period}" onclick="deleteTask(event)">
							<i class="fa-solid fa-trash"></i>
						</button>
					</div>
				</li>`;
	});
}

function addTask()
{
	const taskInput = document.getElementById('new-task');
	const taskName = taskInput.value.trim();
	const selectInput = document.getElementById('dropdown').value;

	// Checks and clears the input field, every time an user submits a task 
	let validity = checkInputs(taskInput, taskName);
	clearField();

	if (validity)
	{
		let task = 
		{
			name: taskName
		};

		let selectedTable = String();
		if (selectInput == 'day') 
		{
			task.period = 'Dia';
			selectedTable = 'day-tasks';
		}
		else
		{
			task.period = 'Noite';
			selectedTable = 'night-tasks';
		}

		// Only one table has 'day-tasks' or 'night-tasks' as its class name,
		// hence the first element (index = 0) has the desired HTML
		let table = document.getElementsByClassName(selectedTable)[0];
		let row = table.querySelector('ol');

		// Adds the task to the DOM, appending raw HTML
		row.innerHTML += `<li>
					${taskName}
					<input type="checkbox" id="done" name="done"/>
					<div class="button-cont">
						<button class="delete-day" onclick="deleteTask(event)">
							<i class="fa-solid fa-trash"></i>
						</button>
					</div>
				</li>`;
		setOperationStatus(taskInput, 'Tarefa adicionada com sucesso!', 'success');

		// Adds the task to local storage
		tasks.push(task);
		updateLocalStorage();
	}
}

function deleteTask(event)
{
	// Gets HTML portion from the page in which a delete button has been clicked
	let clickedButton = event.target;
	let parentDiv = clickedButton.closest('.delete-day, .delete-night');
	
	let period;
	let taskName = parentDiv.parentElement.parentElement.innerText;
	let button = parentDiv.parentElement.querySelector('button');
	
	if (String(button.className).includes('day'))
		period = 'Dia';
	else
		period = 'Noite';

	// Uses a filter to remove tasks that have the same name and period on local storage
	tasks = tasks.filter(task => task.name !== taskName.trim() || task.period !== period);
	updateLocalStorage();

	// Removes the task from the DOM, deleting raw HTML from the page
	parentDiv.parentElement.parentElement.remove();
}

function checkInputs(taskInput, value)
{
	if (typeof value === 'string' && value.length != 0)
		setSuccessFor(taskInput);
	else
		setErrorFor(taskInput, 'Não é possível cadastrar tarefas vazias!');

	const formControls = document.querySelectorAll('.form-control');

	// Every element with a form-control class has to "succeed" to validate an input
	const formIsValid = [...formControls].every(formControl => 
	{
		return (formControl.className == 'form-control success');
	});

	return formIsValid;
}

function setErrorFor(field, message)
{
	// By seting class names to "form-control error/success", 
	// displays error/success messages and visual feedbacks
	field.className = 'form-control error';
	let formControl = field.parentElement.parentElement;
	let small = formControl.querySelector('small');

	small.innerText = message;
	small.parentElement.className = 'form-control error';
}

function setSuccessFor(field)
{
	field.className = 'form-control success';

	// Removes possible previous error message if the new input is valid
	let formControl = field.parentElement.parentElement;
	let small = formControl.querySelector('small');
	small.parentElement.className = 'form-control success';

	// Success visual feedbacks only lasts for a brief period of time
	setTimeout(function() 
	{
		field.className = 'form-control';
	}, 5000);
}

function setOperationStatus(field, message, status)
{
	field.className = `form-control ${status}`;
	let formControl = field.parentElement.parentElement;
	let small = formControl.querySelector('small');

	small.innerText = message;
	small.parentElement.className = `form-control ${status}`;

	setTimeout(function() 
	{
		field.className = 'form-control';
		small.parentElement.className = 'form-control';
	}, 5000);
}
