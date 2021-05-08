import Todos from './todo';
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
        const todos = document.querySelector('.todos');
        while (todoDetails.firstChild) {
          todoDetails.removeChild(todoDetails.lastChild);
        }
        while (todos.firstChild) {
          todos.removeChild(todos.lastChild);
        }
        todoDetails.appendChild(todoDetails(todo, index));
        todos.appendChild(tasksDOM(index));
        todos.appendChild(barDOM(index));
      });
      todosDOM.appendChild(todoDOM);
    })
  }
})

/*eslint-enable */