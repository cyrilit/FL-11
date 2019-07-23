let rootNode = document.getElementById('root');
const itemsLimit = 10;
const divider = 2;
const enterKey = 13;
let moveItem = null;
let dropItem = null;
let inputText = document.getElementById('add-new-action-text');
let addBtn = document.querySelector('.add-box');
let todoList = document.querySelector('.todo-list');
let notificMsg = document.querySelector('.notific-msg');

inputText.addEventListener('input', () => {
	if (inputText.value.trim !== null) {
		addBtn.classList.add('enabled')
	} else {
		addBtn.classList.remove('enabled');
	}
});

function checkListItem() {
	if (!inputText.value.trim()) {
		return;
	}
	if (todoList.children.length < itemsLimit) {
		todoList.appendChild(addListItem(inputText.value));
		addItemEventListeners();
		inputText.value = '';
		addBtn.classList.remove('enabled');
	}
	if (todoList.children.length >= itemsLimit) {
		inputText.disabled = true;
		notificMsg.style.display = 'block';
	} else {
		inputText.disabled = false;
		notificMsg.hidden = true;
		notificMsg.style.display = 'none';
	}
}

todoList.addEventListener('click', (e) => {
	const target = e.target;
	if (target.textContent === 'check_box_outline_blank') {
		target.textContent = 'check_box';
		target.classList.add('checked');
	}
	if (target.textContent === 'delete') {
		target.parentElement.remove();
		checkListItem();
		if (todoList.children.length < itemsLimit) {
			notificMsg.style.display = 'none';
			inputText.disabled = false;
		}
	}
}, false);

let addListItem = (inpTxt) => {
	let checkIcon = document.createElement('i');
	checkIcon.className = 'material-icons';
	checkIcon.textContent = 'check_box_outline_blank';
	let struckEl = document.createElement('i');
	struckEl.className = 'material-icons delete-color';
	struckEl.textContent = 'delete';
	let spanEl = document.createElement('span');
	spanEl.textContent = inpTxt;
	let penEl = document.createElement('i');
	penEl.className = 'material-icons delete-color create pen';
	penEl.textContent = 'create';
	let div = document.createElement('div');
	div.setAttribute('draggable', true);
	div.className = 'todo-action';
	div.appendChild(checkIcon);
	div.appendChild(spanEl);
	div.appendChild(penEl);
	div.appendChild(struckEl);
	return div;
}

function addItemEventListeners() {
	let elemEdit = todoList.querySelectorAll('.create');
	for (let i = 0; i < elemEdit.length; i++) {
		elemEdit[i].addEventListener('click', editListItem, false);
	}
}

function editListItem() {
	let inputText = document.createElement('input');
	let elemSave = document.createElement('i');
	let wrapFieldSet = document.createElement('div');
	let mainFieldSet = this.parentElement;
	let mainElements = mainFieldSet.children;
	let span = mainFieldSet.querySelector('span');
	elemSave.classList.add('material-icons', 'delete-color');
	elemSave.textContent = 'save';
	inputText.type = 'text';
	inputText.value = span.textContent;
	modify(mainElements, 'hide', false);
	mainFieldSet.appendChild(wrapFieldSet);
	wrapFieldSet.appendChild(inputText);
	wrapFieldSet.appendChild(elemSave);
	elemSave.addEventListener('click', () => {
		changeItem(inputText.value);
	}, false);
	function changeItem(value) {
		span.innerHTML = value;
		modify(mainElements, 'hide', true);
		wrapFieldSet.remove();
	}
}

function modify(data, className, removeClasses = false) {
	for (let i = 0; i < data.length; i++) {
		if (removeClasses) {
			data[i].classList.remove(className)
		} else {
			data[i].classList.add(className);
		}
	}
}

function actionTarget(event) {
	const target = event.target;
	if (target.hasAttribute('draggable')) {
		return target;
	}
	if (target.tagName === 'I' || target.tagName === 'SPAN') {
		return target.parentElement;
	}
}

todoList.addEventListener('dragstart', (e) => {
	moveItem = actionTarget(e);
	if (!moveItem) {
		return;
	}
	moveItem.style.opacity = '.8';
}, false);


addBtn.addEventListener('click', checkListItem);
inputText.addEventListener('keyup', function(e) {
	if (e.keyCode === enterKey) {
		e.preventDefault();
		addBtn.click();
	}
});

todoList.addEventListener('drop', function(e) {
	dropItem = actionTarget(e);
	if (!dropItem) {
		return;
	}
	e.preventDefault();
	let rect = dropItem.getBoundingClientRect();
	let midline = rect.top + (rect.bottom - rect.top) / divider;
	let afterDropItem = midline <= e.clientY ? dropItem.nextSibling : dropItem;
	todoList.insertBefore(moveItem, afterDropItem);
});

todoList.addEventListener('dragover', (e) => {
	e.preventDefault();
	let dropPosition = actionTarget(e);
	if (!dropPosition) {
		return;
	}
});

todoList.addEventListener('dragend', () => {
	moveItem.style.opacity = '';
});

todoList.addEventListener('dragleave', (e) => {
	let dropPosition = actionTarget(e);
	if (!dropPosition) {
		return;
	}
});