import {renderList} from './list';
import {renderTask} from './task'

let lists = JSON.parse(localStorage.getItem('task.lists')) || [];
let selectedListId = localStorage.getItem('task.selectedListId');
const overlay = document.querySelector('#overlay');
const formContainer = document.querySelector('.close');
const addButton = document.querySelector('.add-btn');
const hamburger = document.querySelector('.hamburger');
let modalOpen = false;

function renderAndSave() {
    renderList();
    localStorage.setItem('task.lists', JSON.stringify(lists));
    localStorage.setItem('task.selectedListId', selectedListId);
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function renderTaskCount(selectedList) {
    const incompleteTaskCount = selectedList.tasks.filter(
        (task) => !task.complete).length;
    const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}

function colorTasks(selectedList) {
    const todos = [...document.querySelectorAll('.todo')];
    const checkbox = [...document.querySelectorAll('.checkbox')];
    for (let i = 0; i < todos.length; i++) { 
        for (let i = 0; i < selectedList.tasks.length; i++) {
            if (selectedList.tasks[i].priority === 'High') {
                checkbox[i].getElementsByClassName.border = "2px solid #96f542";
            } else if (selectedList.tasks[i].priority === 'Medium') {
                checkbox[i].style.border = '2px solid #96f542';
            } else {
                checkbox[i].style.border = '2px solid #f5ad42';
            }
        }
    }
}

function render() {
    clearElement(listsContainer);
    renderLists();
    const selectedList = lists.find((list) => list.id === selectedListId);
    if (selectedListId === null) {
        listDisplayContainer.style.display = 'none';
    } else {
        listDisplayContainer.style.display = '';
        listTitleElement.innerHTML = `<i class='fas fa-tasks'></i> ${selectedListId.name}`;
        renderTaskCount(selectedList);
        clearElement(tasksContainer);
        renderTasks(selectedList);
        colorTasks(selectedList);
    }
}

function renderLists() {
    lists.forEach((list) => {
        const listElement = document.createElement('li');
        listElement.innerText = list.name;
        listElement.dataset.listId = list.id;
        if (list.id == selectedListId) {
            listElement.classList.add('active-list');
        }
        listsContainer.appendChild(listElement)
    });
}

function renderTasks(selectedList) {
    if (selectedList.tasks.length === 0) {
        listDisplayContainer.style.background = "url(./"
    }
}