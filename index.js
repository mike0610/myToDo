const input = document.querySelector('#new-todo-input');
const btn = document.querySelector('#submit-new-todo-btn');
const result = document.querySelector('#todo-list-container');

btn.addEventListener('click', () => {
	if (input.value === '') return;
	createDeleteElements(input.value);
	input.value = '';
});

// create and delete todo
function createDeleteElements(value) {

	const li = document.createElement('li');
	const btn = document.createElement('button');

	li.className = 'list-group-item';
	li.textContent = value;

	btn.className = 'todo-remove-button';
	btn.innerHTML = '<i class="fas fa-times"></i>';
	li.appendChild(btn);

	// remove todo
	btn.addEventListener('click', () => {
		if (window.confirm('Are you sure?')) {
			result.removeChild(li);
		}
	});
	result.appendChild(li);
}

// Enter key
input.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		createDeleteElements(input.value);
	}
});

// Filter
document.querySelector('#search_input').addEventListener('input', filterList);

function filterList() {
	const searchInput = document.querySelector('#search_input');
	const filter = searchInput.value.toLowerCase();
	const listItems = document.querySelectorAll('.list-group-item');

	listItems.forEach((li) => {
		let text = li.textContent;
		if (text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
			li.style.display = '';
		} else {
			li.style.display = 'none';
		}
	});
}
