import Todos from './todos';
import SVG from './svg';
import { barDOM, tasksDOM } from './dom';
/*eslint-disable */
const ManipulateDOM = (() => {
  const putTodos = () => {
    const todosDOM = document.querySelector('.list-todos');
    Todos.getAllTodos().forEach((todo, index) => {
      const todoDOM = document.createElement('div');
      todoDOM.dataset.id = index;
      todoDOM.classList.add('todo');
      const titleDOM = document.createElement('p');
      titleDOM.classList.add('title');
      titleDOM.textContent = todo.title;
      const descDOM = document.createElement('p');
      descDOM.classList.add('description');
      descDOM.textContent = todo.description;
      todoDOM.appendChild(titleDOM);
      todoDOM.appendChild(descDOM);
      todoDOM.addEventListener('click', () => {
        const todoDetails = document.querySelector('.todo-details');
        const todos = document.querySelector('.todosp');
        while (todoDetails.firstChild) {
          todoDetails.removeChild(todoDetails.lastChild);
        }
        while (todos.firstChild) {
          todos.removeChild(todos.lastChild);
        }
        todoDetails.appendChild(TodoFieldsDOM(todo, index));
        todos.appendChild(tasksDOM(index));
        todos.appendChild(barDOM(index));
      });
      todosDOM.appendChild(todoDOM);
    });
  };

  /*eslint-enable */

  const TodoFieldsDOM = (todo, index) => {
    let wrap = document.createElement('div');
    wrap.classList.add('todo-options');
    let info = document.createElement('div');
    info.classList.add('todo-info');
    let wrapbuttons = document.createElement('div');
    wrapbuttons.classList.add('todo-buttons');
    let title = document.createElement('h1');
    title.textContent = todo.title;
    const btnEdit = document.createElement('button');
    let btnDelete = document.createElement('button');
    btnEdit.id = 'btnEdit';
    btnDelete.id = 'btnDelete';
    btnEdit.innerHTML = SVG.editBtn();
    btnDelete.innerHTML = SVG.deleteBtn();
    btnEdit.addEventListener('click', () => {
      const todosDOM = document.querySelector('.list-todos');
      document.querySelector('#btnAddTodo').classList.add('hidden');
      document.querySelector('#btnAddTodo').classList.remove('hidden');
      while (todosDOM.firstChild) {
        todosDOM.removeChild(todosDOM.lastChild)
      }
      todosDOM.appendChild(EditTodoDOM(todo, index));
    })
    btnDelete.addEventListener('click', () => {
      Todos.removeTodo(index);
      let todos = document.querySelector('.todosp');
      while (wrap.firstChild) {
        wrap.removeChild(wrap.lastChild);
      }
      while (todos.firstChild) {
        todos.removeChild(todos.lastChild);
      }
      reloadTodos();
    });
    info.appendChild(title);
    wrapbuttons.appendChild(btnEdit);
    wrapbuttons.appendChild(btnDelete);
    wrap.appendChild(info);
    wrap.appendChild(wrapbuttons);
    return wrap;
  }

  const EditTodoDOM = (todo, index) => {
    let form = document.createElement('div');
    form.classList.add('form-add');
    let textTitle = document.createElement('input');
    let labelTitle = document.createElement('label');
    labelTitle.htmlFor = 'textTitle';
    labelTitle.textContent = 'Title';
    let labelDesc = document.createElement('label');
    labelDesc.htmlFor = 'textDesc';
    labelDesc.textContent = 'Description:';
    textTitle.type = 'text';
    textTitle.id = 'textTitle';
    textTitle.value = todo.title;
    let textDesc = document.createElement('input');
    textDesc.type = 'text';
    textDesc.id = 'textDescription';
    textDesc.value = todo.description;
    let btnSubmit = document.createElement('button');
    btnSubmit.textContent = 'Edit';
    btnSubmit.classList.add('btn-aside');
    let Error = document.createElement('p');
    Error.classList.add('hidden');
    Error.classList.add('error');
    form.appendChild(labelTitle);
    form.appendChild(textTitle);
    form.appendChild(labelDesc);
    form.appendChild(textDesc);
    form.appendChild(btnSubmit);
    form.appendChild(Error);
    btnSubmit.addEventListener('click', () => {
      if (textTitle.value !== '' && textDesc.value !== '') {
        Todos.editTodo(index, textTitle.value, textDesc.value);
        reloadTodos();
        document.querySelector('#btnBackTodo').classList.add('hidden');
        document.querySelector('#btnAddTodo').classList.remove('hidden');
      } else {
        Error.textContent = 'Error: Cannot be blank';
        Error.classList.remove('hidden');
      }
    })
    return form;
  }

  const createNewTodoDOM = () => {
    let form = document.createElement('div');
    form.classList.add('form-add');
    let textTitle = document.createElement('input');
    let labelTitle = document.createElement('label');
    labelTitle.htmlFor = 'textTitle';
    labelTitle.textContent = 'Title';
    let labelDesc = document.createElement('label');
    labelDesc.htmlFor = 'textDesc';
    labelDesc.textContent = 'Description';
    textTitle.type = 'text';
    textTitle.id = 'textTitle';
    let textDesc = document.createElement('input');
    textDesc.type = 'text';
    textDesc.id = 'textDesc'
    let btnSubmit = document.createElement('button');
    btnSubmit.textContent = 'Create';
    btnSubmit.classList.add('btn-aside');
    let Error = document.createElement('p');
    Error.classList.add('hidden');
    Error.classList.add('error');
    form.appendChild(labelTitle);
    form.appendChild(textTitle);
    form.appendChild(labelDesc);
    form.appendChild(textDesc);
    form.appendChild(btnSubmit);
    form.appendChild(Error);
    btnSubmit.addEventListener('click', () => {
      if(textTitle.value !== '' && textDesc.value !== '') {
        Todos.addProject(textTitle.value, textDesc.value);
        reloadTodos();
        document.querySelector('#btnBackTodo').classList.add('hidden');
        document.querySelector('#btnAddTodo').classList.remove('hidden');
      } else {
        Error.textContent = 'ERROR: Cannot be blank';
        Error.classList.remove('hidden');
      }
    });
    return form;
  }
  const reloadTodos = () => {
    const todosDOM = document.querySelector('.list-todos');
    while (todosDOM.firstChild) {
      todosDOM.removeChild(todosDOM.lastChild);
    }
    putTodos();
  }

  const InitialEvents = () => {
    const btnAddTodo = document.querySelector('#btnAddTodo');
    const btnBackTodo = document.querySelector('#btnBackTodo');
    btnAddTodo.addEventListener('click', (e) => {
      const todoDOM = document.querySelector('.list-todos');
      e.target.classList.add('hidden');
      btnBackTodo.classList.remove('hidden');
      while (todoDOM.firstChild) {
        todoDOM.removeChild(todoDOM.lastChild);
      }
      todoDOM.replaceChildren(createNewTodoDOM());
    });
    btnBackTodo.addEventListener('click', (e) => {
      e.target.classList.add('hidden');
      btnAddTodo.classList.remove('hidden');
      reloadTodos();
    });
  }
  const init = () => {
    reloadTodos();
    InitialEvents();
  }
    return { init }
})();

ManipulateDOM.init();