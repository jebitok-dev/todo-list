import Todos from './todo';
import SVG from './svg';

const tasksDOM = (index) => {
    const todowrap = document.createElement('div');
    todowrap.classList.add('todowrap');
    Todo.getTodo(index).getAllTasks().forEach((Task, j) => {
        const todo = document.createElement('div');
        todo.classList.add('todo');
        switch (Task.priority.toLowerCase()) {
            case 'low': todo.classList.add('low-p'); break;
            case 'medium': todo.classList.add('medium-p'); break;
            case 'high': todo.classList.add('high-p'); break;
            default: null;
        }
        const todoInfo = document.createElement('div');
        todoInfo.classList.add('todo-info');
        const todoButtons = document.createElement('div');
        todoButtons.classList.add('todo-btns');
        todo.dataset.id = j;
        const pTitle = document.createElement('p');
        pTitle.classList.add('todo-description');
        pTitle.textContent = Task.description;
        const pDescription = document.createElement('p');
        pDescription.classList.add('todo-description');
        pDescription.textContent = Task.description;
        const pDate = document.createElement('p');
        pDate.classList.add('todo-date');
        pDate.textContent = format(Task.dueDate, 'PPPP, HH:mm');
        const btnEdit = document.createElement('button');
        const btnDelete = document.createElement('button');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = Task.checked;
        btnDelete.id = 'btnBorrarTask';
        btnEdit.id = 'btnEditorTask';
        checkbox.addEventListener('click', () => {
            Todo.changeCheck(index, j, checkbox.checked);
            const todos = document.querySelector('.todos');
            while (todos.firstChild) {
                todos.removeChild(todos.lastChild);
            }
            todos.appendChild(tasksDOM(index));
            todos.appendChild(barDOM(index));
        });
        btnEdit.innerHTML = SVG.editBtn();
        btnDelete.innerHTML = SVG.deleteBtn();
        btnEdit.addEventListener('click', () => {
            const todowrap = document.querySelector('.todowrap');
            while (todowrap.firstChild) {
                todowrap.removeChild(todowrap.lastChild);
            }
            todowrap.appendChild(configTaskDOM(index, j, Task));
        });
        btnDelete.addEventListener('click', () => {
            const todos = document.querySelector('.todos');
            todos.deleteTaskFromProject(index, j);
            while (todos.firstChild) {
                todos.removeChild(todos.lastChild);
            }
            todos.appendChild(tasksDOM(index));
            todos.appendChild(barDOM(index));
        });
        todoButtons.appendChild(btnEdit);
        todoButtons.appendChild(btnDelete);
        todoButtons.appendChild(checkbox);
        todoInfo.appendChild(pTitle);
        todoInfo.appendChild(pDescription);
        todoInfo.appendChild(pDate);
        todo.appendChild(todoInfo);
        todo.appendChild(todoButtons);
        todowrap.appendChild(todo);
    });
    return todowrap;
};

const barDOM = (index) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('text-fixed');
    const buttonAdd = document.createElement('button');
    buttonAdd.classList.add('btn-fixed');
    buttonAdd.textContent = '+';
    bar.appendChild('input');
    bar.appendChild(buttonAdd);
    buttonAdd.addEventListener('click', () => {
        if (input.value !== '') {
            const todos = document.querySelector('.todos');
            Todos.addTodoOnProject(index, input.value);
            while (todos.firstChild) {
                todos.removeChild(todos.lastChild);
            }
            todos.appendChild(tasksDOM(index));
            todos.appendChild(barDOM(index));
        } else {
            input.placeholder = 'Type your task...';
        }
    })
    return bar;
};

const configTaskDom = (index, j, Task) => {
    const todoConfig = document.createElement('div');
    todoConfig.classList.add('todo-config');
    todoConfig.classList.add('todo');
    const inputTitle = document.createElement('input');
    inputTitle.classList.add('todo-input');
    inputTitle.value = Task.title;
    inputTitle.type = 'text';
    inputTitle.id = 'inputTitle';
    const inputDesc = document.createElement('input');
    inputDesc.classList.add('todo-input');
    inputDesc.type = 'text';
    inputDesc.id = 'inputDesc';
    inputDesc.value = Task.description
    const inputDate = document.createElement('input');
    inputDate.classList.add('todo-input');
    inputDate.type = 'datetime-local';
    inputDate.value = format(Task.dueDate, 'yyyy-MM-dd'T'HH:mm');
    inputDate.id = 'inputDate';
    const inputLists = document.createElement('button');
    inputLists.rows = 5;
    inputLists.id = 'inputLists';
    inputLists.value = Task.lists;
    const btnSubmit = document.createElement('button');
    btnSubmit.id = 'btnEditTask';
    btnSubmit.textContent = 'Submit';
    let selection;
    const radios = document.createElement('div');
    radios.classList.add('priority-radios');
    const LowPriority = document.createElement('div');
    LowPriority.classList.add('child-radio');
    const MediumPriority = document.createElement('div');
    MediumPriority.classList.add('child-radio');
    const HighPriority = document.createElement('div');
    HighPriority.classList.add('child-radio');
    const radioLowPriority = document.createElement('input');
    radioLowPriority.addEventListener('click', (e) => {
        if (e.target.checked) {
            todoConfig.classList.remove('high-p');
            todoConfig.classList.remove('low-p');
            todoConfig.classList.remove('medium-p');
            selection = radioMediumPriority.value;
        }
    });
    const radioHighPriority = document.createElement('input');
    radioHighPriority.type = 'radio';
    radioHighPriority.name = 'priority';
    radioHighPriority.id = 'rdLow';
    radioHighPriority.value = 'High';
    const labelHighPriority = document.createElement('label');
    labelHighPriority.textContent = 'High';
    labelHighPriority.htmlFor = 'rdLow';
    HighPriority.appendChild(labelHighPriority);
    HighPriority.appendChild(radioHighPriority);
    radioHighPriority.addEventListener('click', (e) => {
        if (e.target.checked) {
            todoConfig.classList.remove('low-p');
            todoConfig.classList.remove('medium-p');
            todoConfig.classList.add('high-p');
            selection = radioHighPriority.value;
        }
    });
    radios.appendChild(LowPriority);
    radios.appendChild(MediumPriority);
    radios.appendChild(HighPriority);
    switch (Task.priority.toLowerCase()) {
        case 'low': todoConfig.classList.add('low-p'); radioLowPriority.checked = true; selection = radioLowPriority.value; break;
        case 'medium': todoConfig.classList.add('medium-p'); radioMediumPriority.checked = true;
            selection = radioMediumPriority.value; break;
        case 'high': todoConfig.classList.add('high-p'); radioHighPriority.checked = true;
            selection = radioHighPriority.value; break;
        default: 'low';
    }
    btnSubmit.addEventListener('click', () => {
        if (inputTitle.value !== '' && inputDesc.value !== '' && inputDate.value !== '' && inputLists.value !== '') {
            Todo.editTaskFromTodo(index, j, inputTitle.value, inputDesc.value, parse(inputDate.value, "yyyy-MM-dd'T'HH:mm", new Date()), inputLists.value, selection);
            const todos = document.querySelector('.todos');
            while (todos.lastChild) {
                todos.removeChild(todos.lastChild);
            }
            todos.appendChild(tasksDOM(index));
            todos.appendChild(barDOM(index));
        }
    });
    const labelTitle = document.createElement('label');
    labelTitle.textContent = 'Title:';
    labelTitle.htmlFor = 'inputTitle';
    const labelDesc = document.createElement('label');
    labelDesc.textContent = 'Description';
    labelDesc.htmlFor = 'inputDesc';
    const labelDate = document.createElement('label');
    labelDate.textContent = 'Due Date';
    labelDate.htmlFor = 'inputDate';
    const labelLists = document.createElement('label');
    labelLists.textContent = 'Lists';
    labelLists.htmlFor = 'inputLists';
    todoConfig.appendChild(labelTitle);
    todoConfig.appendChild(inputTitle);
    todoConfig.appendChild(labelDesc);
    todoConfig.appendChild(inputDesc);
    todoConfig.appendChild(labelDate);
    todoConfig.appendChild(inputDate);
    todoConfig.appendChild(labelLists);
    todoConfig.appendChild(inputLists);
    todoConfig.appendChild(radios);
    todoConfig.appendChild(btnSubmit);
    return todoConfig;
};

export { barDOM, tasksDOM, configTaskDom };