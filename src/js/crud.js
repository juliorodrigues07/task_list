function addTask()
{
	const taskInput = document.getElementById('new-task');
	const taskName = taskInput.value.trim();
	const selectInput = document.getElementById('dropdown').value;

	let validity = checkInputs(taskInput, taskName);

	if (validity)
	{
		let selectedTable = String();
		if (selectInput == 'day')
			selectedTable = 'day-tasks';
		else
			selectedTable = 'night-tasks';

		// Only one table has 'day-tasks' or 'night-tasks' as its class name,
		// hence the first element (index = 0) has the desired HTML
		let table = document.getElementsByClassName(selectedTable)[0];
		let field = table.querySelector('ol');
		
		field.innerHTML += `<li>
					${taskName}
					<div class="button-cont">
						<button id="edit-day" onclick="editTask()">
							<i class="fa-solid fa-pen-to-square"></i>
						</button>
						<button id="delete-day" onclick="deleteTask()">
							<i class="fa-solid fa-trash"></i>
						</button>			
					</div>
				</li>`;
		setOperationStatus(taskInput, 'Tarefa adicionada com sucesso!', 'success');
	} 
	else
	{
		setOperationStatus(taskInput, 'Houve um erro ao adicionar a tarefa!', 'error');
	}
}

function checkInputs(taskInput, value)
{
	if (typeof value === 'string' && value.length != 0)
		setSuccessFor(taskInput);
	else
		setErrorFor(taskInput, 'Não é possível cadastrar tarefas vazias!');

	const formControls = document.querySelectorAll('.form-control');

	const formIsValid = [...formControls].every(formControl => {
		return (formControl.className == 'form-control success');
	});

	return formIsValid;
}

function setErrorFor(field, message) 
{
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

	setTimeout(function() {
		field.className = 'form-control';
	}, 2500);
}

function setOperationStatus(field, message, status)
{
	field.className = `form-control ${status}`;
	let formControl = field.parentElement.parentElement;
	let small = formControl.querySelector('small');
	
	small.innerText = message;
	small.parentElement.className = `form-control ${status}`;

	setTimeout(function() {
		field.className = 'form-control';
		small.parentElement.className = 'form-control';
	}, 5000);
}
