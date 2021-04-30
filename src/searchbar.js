import { lists, selectedListId, clearElement, renderLists, editTask, } from './index';
import {renderList} from './list';
import { renderTask } from './task';

const searchTasks = (() => {
    const searchBar = document.querySelector('#searchBar');

    searchBar.addEventListener('keyup', (e) => {
        const selectedList = lists.find((list) => list.id === selectedListId);
        const searchString = e.target.value.toLowerCase();

        const searchedTasks = selectedList.tasks.filter((task) => {
            return (
                task.name.toLowerCase().includes(searchString) ||
                task.description.toLowerCase().includes(searchString)
            );
        });
        renderSearch(searchedTasks);
    });

    function renderSearch(searchedTasks) {
        clearElement(listsContainer);
        renderLists();
        const selectedList = lists.find((list) => list.id === selectedListId);

        if (selectedListId === null) {
            const todoLister = document.querySelector('.todo-lister');
            todoLister.style.display = 'none';
            listDisplayContainer.style.background = 'red';
        } else {
            listDisplayContainer.style.display = '';
            listTitleElement.innerHTML = `<i class='fas fa-tasks'></i> ${selectedList.name}`;
            clearElement(tasksContainer);
            renderSearchTasks(searchedTasks);
            colorSearchedTasks(searchedTasks);
        }
    }

    function colorSearchedTasks(searchedTasks) {
        const todos = [...document.querySelectorAll('.todo')];
        const checkbox = [...document.querySelectorAll('./checkbox')];
        for (let i = 0; i < searchedTasks.length; i++) {
            if (searchedTasks[i].priority === 'High') {
                checkbox[i].style.border = '2px solid #96f542';
            } else if (searchedTasks[i].priority === 'Medium'){
                checkbox[i].style.border = '2px solid #96f542';
            } else {
                checkbox[i].style.border = '2px solid #f5ad42';
            }
        }
    }

    function renderSearchedTasks(searchedTasks) {
        searchedTasks.forEach((task) => {
            const taskElement = document.importNode(taskTemplate.content, true);
            const checkbox = taskElement.querySelector('input');
            checkbox.id = task.id;
        })
    }
})