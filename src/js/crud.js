let dummyTasks = 
[
	{name: 'Andar de bike', period: 'Dia', status: true},
	{name: 'Pesquisar preços de PC', period: 'Dia', status: true},
	{name: 'Estudar para a prova', period: 'Dia', status: true},
	{name: 'Lorem ipsum is simply dummy text', period: 'Dia', status: false},
	{name: 'Estudar inglês', period: 'Noite', status: false},
	{name: 'Verificar emails', period: 'Noite', status: true},
	{name: 'Continuar a ler o livro', period: 'Noite', status: false},
	{name: 'Lorem ipsum is simply dummy text', period: 'Noite', status: false}
];

let tasks = dummyTasks;
const localTasks = JSON.parse(localStorage.getItem('tasks'));

if (localStorage.getItem('tasks') !== null)
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

const focusField = () =>
{
	document.getElementById('new-task').focus();
};

loadData();
focusField();

function loadData()
{
	// Loads and displays on page any possible previous tasks stored locally
	tasks.forEach(task => {

		let table, period;
		if (task.period === 'Dia')
		{
			table = 'day-tasks';
			period = 'day';
		}
		else
		{
			table = 'night-tasks';
			period = 'night';
		}

		writeTask(period, table, task.name, task.status);
	});
}

function hasParentWithClass(childElement, className) 
{
	let currentElement = childElement;

	// Looking for a parent with a given class name
	while (currentElement && currentElement !== document.body) 
	{
		if (currentElement.classList.contains(className)) 
			return currentElement.className;

		currentElement = currentElement.parentNode;
	}

	// If no parent with the specified class is found
	return false;
}

function markTask(event)
{
	let status = String();
	let checkButton = event.target;
	let parentDiv = checkButton.closest('.open, .done');

	if (parentDiv.className == 'done')
	{
		status = false;
		parentDiv.className = 'open';
		parentDiv.innerHTML = '<i class="fa-solid fa-xmark"></i>';
		parentDiv.parentElement.querySelector('span').className = 'unfin';
	}
	else
	{
		status = true;
		parentDiv.className = 'done';
		parentDiv.innerHTML = '<i class="fa-solid fa-check"></i>';
		parentDiv.parentElement.querySelector('span').className = 'concluded';
	}

	let period = String();
	let taskName = parentDiv.parentElement.querySelector('span').innerText;

	let whichPeriod = hasParentWithClass(parentDiv, 'day-tasks');
	if (!whichPeriod)
		whichPeriod = hasParentWithClass(parentDiv, 'night-tasks');

	if (String(whichPeriod).includes('day'))
		period = 'Dia';
	else
		period = 'Noite';

	// Updates task status on localStorage 
	tasks.forEach(task => 
	{
		if (task.name === taskName.trim() && task.period === period)
			task.status = status;
	});
	updateLocalStorage();
}

function writeTask(period, category, taskName, status=false)
{
	// Only one table has 'day-tasks' or 'night-tasks' as its class name,
	// hence the first element (index = 0) has the desired HTML
	let table = document.getElementsByClassName(category)[0];
	let row = table.querySelector('ol');

	// Creates a new <li> element
	let newListItem = document.createElement('li');

	// Creates a new <span> element that contais the task name
	let newSpan = document.createElement('span');
	newSpan.textContent = taskName;

	// Creates the checkbox button that marks the task status
	let checkbox = document.createElement('button');
	if (status)
	{
		newSpan.classList.add('concluded');
		checkbox.classList.add('done');
		checkbox.innerHTML = '<i class="fa-solid fa-check"></i>';
	}	
	else
	{
		newSpan.classList.add('unfin');
		checkbox.classList.add('open');
		checkbox.innerHTML = '<i class="fa-solid fa-xmark"></i>';
	}
	checkbox.onclick = function(event) {
		markTask(event);
	};

	// Create a new <div> for buttons
	let newButtonDiv = document.createElement('div');
	newButtonDiv.classList.add('button-cont');

	// TODO: Include edit button later
	let deleteButton = document.createElement('button');
	deleteButton.classList.add(`delete-${period}`);
	deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
	deleteButton.onclick = function(event) {
		deleteTask(event);
	};

	// Appends the task to the table
	newButtonDiv.appendChild(deleteButton);
	newListItem.appendChild(checkbox);
	newListItem.appendChild(newSpan);
	newListItem.appendChild(newButtonDiv);
	row.appendChild(newListItem);
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
		let period;
		let task = 
		{
			name: taskName
		};

		let selectedTable = String();
		if (selectInput == 'day') 
		{
			period = 'day';
			task.period = 'Dia';
			selectedTable = 'day-tasks';
		}
		else
		{
			period = 'night';
			task.period = 'Noite';
			selectedTable = 'night-tasks';
		}

		// Adds the task to the DOM
		writeTask(period, selectedTable, taskName);
		setOperationStatus(taskInput, 'Tarefa adicionada com sucesso!', 'success');

		// Adds the task to local storage
		task.status = false;
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
