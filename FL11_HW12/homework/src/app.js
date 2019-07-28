const root = document.getElementById('root');

let customAlert = root.querySelector('.alert-container');
let customAlertMessage = customAlert.querySelector('.alert-msg');
let customAlertTimer;
let mainPage = root.querySelector('#main');
let addPage = root.querySelector('#add');
let changePage = root.querySelector('#change');
let addInputField = addPage.querySelector('.add-input-field');
let addSaveBtn = addPage.querySelector('.add-save-btn');
let todoList = mainPage.querySelector('.todo-list');
let doneList = mainPage.querySelector('.done-list');
let emptyListMessage = mainPage.querySelector('.empty-msg');
let templateContent = root.querySelector('template').content.querySelector('.todo-item');
let alertHighTimeOut = 2000;
let changeInputField = changePage.querySelector('.modify-input-field');
let changeSaveBtn = changePage.querySelector('.change-save-btn');
let changingItem;
let localData = JSON.parse(localStorage.getItem('todoListItems'));
let items = localData ? localData : [];

function showAlertMsg(message) {
	clearTimeout(customAlertTimer);
	customAlertMessage.textContent = message;
	customAlert.classList.remove('display-none');
	customAlertTimer = setTimeout(hideAlertMsg, alertHighTimeOut);
}

function hideAlertMsg() {
	clearTimeout(customAlertTimer);
	customAlert.classList.add('display-none');
}

function listItemChecker(newListItem, checkboxImg, itemDescription) {
	newListItem.remove();
	doneList.appendChild(newListItem);
	checkboxImg.setAttribute('src', 'assets/img/done-s.png');
	checkboxImg.setAttribute('alt', '[v]');
	itemDescription.classList.add('bg-checked');
	itemDescription.onclick = (evt) => {
		evt.preventDefault();
		showAlertMsg('You can\'t edit already done item');
	};
}

function listItemUnChecker(newListItem, checkboxImg, itemDescription) {
	newListItem.remove();
	todoList.appendChild(newListItem);
	checkboxImg.setAttribute('src', 'assets/img/todo-s.png');
	checkboxImg.setAttribute('alt', '[ ]');
	itemDescription.classList.remove('bg-checked');
	itemDescription.onclick = null;
}

function listItemCreator(newItemObj) {
	let newListItem = templateContent.cloneNode(true);
	newListItem.setAttribute('id', `item-${newItemObj.id}`);
	let itemDescription = newListItem.querySelector('.modify-link');
	itemDescription.textContent = newItemObj.description;
	let newHref = itemDescription.getAttribute('href') + newItemObj.id;
	itemDescription.setAttribute('href', newHref);
	let checkbox = newListItem.querySelector('label input[type=\'checkbox\']');
	checkbox.checked = newItemObj.isDone;
	let checkboxImg = newListItem.querySelector('label img');
	let deleteBtn = newListItem.querySelector('.delete-link');

	checkbox.addEventListener('change', function () {
		newItemObj.isDone = this.checked;
		localStorageSaver();

		if (this.checked) {
			listItemChecker(newListItem, checkboxImg, itemDescription)
		} else {
			listItemUnChecker(newListItem, checkboxImg, itemDescription)
		}
	});

	deleteBtn.addEventListener('click', function () {
		items = items.filter((el) => el.id !== newItemObj.id);
		localStorageSaver();
		newListItem.remove();
		if (!items.length) {
			emptyListMessage.classList.remove('display-none');
		}
	});

	if (newItemObj.isDone) {
		listItemChecker(newListItem, checkboxImg, itemDescription);
	} else {
		listItemUnChecker(newListItem, checkboxImg, itemDescription);
	}
}

function onHash() {
	let hashSplit = window.location.hash.split('/');
	let hashItemId = +hashSplit[hashSplit.length - 1].replace(/\D/, '');
	switch (hashSplit[1]) {
		case '':
			mainPage.classList.remove('display-none');
			addPage.classList.add('display-none');
			changePage.classList.add('display-none');
			break;
		case 'add':
			mainPage.classList.add('display-none');
			addPage.classList.remove('display-none');
			changePage.classList.add('display-none');
			addInputField.focus();
			break;
		case 'modify':
			mainPage.classList.add('display-none');
			addPage.classList.add('display-none');
			changePage.classList.remove('display-none');

			changingItem = items.filter((el) => el.id === hashItemId)[0];
			changeInputField.focus();
			changeInputField.value = changingItem.description;
			break;
		default:
	}
}

function localStorageSaver() {
	localStorage.setItem('todoListItems', JSON.stringify(items));
}

function appInitialization() {
	window.onhashchange = onHash;
	window.location.hash = '#/';

	items.forEach(listItemCreator);
	if (items.length) {
		emptyListMessage.classList.add('display-none')
	}

	if (window.chrome) {
		customAlert.classList.add('chrome');
	}
	customAlert.querySelector('.alert-header .alert-close').addEventListener('click', hideAlertMsg);

	addSaveBtn.addEventListener('click', function (evt) {
		let saveInputValue = addInputField.value.trim();

		if (saveInputValue) {
			let containsElement = items.filter((el) => el.description === saveInputValue).length > 0;

			if (!containsElement) {
				let newItemObj = {
					id: items.length ? items[items.length - 1].id + 1 : 0,
					description: saveInputValue,
					isDone: false
				};
				items.push(newItemObj);
				localStorageSaver();

				listItemCreator(newItemObj);

				addInputField.value = '';
				emptyListMessage.classList.add('display-none');
			} else {
				evt.preventDefault();
				showAlertMsg('You can\'t add already exist item');
			}
		} else {
			evt.preventDefault();
			addInputField.value = '';
		}
	});
	changeSaveBtn.addEventListener('click', function (evt) {
		let saveChanges = changeInputField.value.trim(); // сохранили написанное нами

		let containsElement = items.filter((el) => el.description === saveChanges).length > 0;
		if (saveChanges) {
			if (!containsElement) {
				changingItem.description = saveChanges;
				localStorageSaver();

				let currentItem = mainPage.querySelector(`#item-${changingItem.id}`);
				let currentItemDescription = currentItem.querySelector('.modify-link');
				currentItemDescription.textContent = changingItem.description;
			} else {
				evt.preventDefault();
				showAlertMsg('You can\'t add already exist item');
			}
		} else {
			evt.preventDefault();
			changeInputField.value = '';
		}
	});
}

appInitialization();