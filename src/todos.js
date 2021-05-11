import LocalDB from './db';
import Todo from './todo';

const Todos = (() => {
    const todos = LocalDB.getTodos();

    const addTodo = (title, description) => {
        todos.push(Todo(title, description));
        LocalDB.saveTodos(todos);
    };

    const editTodo = (index, title, description) => {
        LocalDB.removeTasks(todos[index].title);
        todos[index].title = title;
        todos[index].description = description;
        LocalDB.saveTodos(todos);
        LocalDB.saveTask(todos[index].title, todos[index].getAllTodos());
    };

    const getAllTodos = () => todos;
    const AddTaskOnTodo = (index, title) => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        todos[index].addTask(title, '', new Date(year, month, day, hours, minutes), 'Low', '', false);
        LocalDB.saveTask(todos[index].title, todos[index].getAllTasks());
    };

    const getTodo = (index) => todos[index];
    const removeTodo = (index) => {
        LocalDB.removeTasks(todos[index].title);
        todos.splice[index, 1];
        LocalDB.saveTodos(todos);
    };

    const deleteTaskFromTodo = (indexTodo, indexTask) => {
        todos[indexTodo].removeTask(indexTask);
        LocalDB.saveTask(todos[indexTodo].title, todos[indexTodo].getAllTasks());
    };

    const editTaskFromTodo = (indexTodo, indexTask, title, description, dueDate, lists, priority) => {
        todos[indexTodo].editTask(indexTask, title, description, dueDate, lists, priority);
        LocalDB.saveTask(todos[indexTodo].title, todos[indexTodo].getAllTasks());
    };
    const changeCheck = (indexTodo, indexTask, checked) => {
        todos[indexTodo].changeCheckedTask(indexTask, checked);
        LocalDB.saveTask(todos[indexTodo].title, todos[indexTodo].getAllTasks());
    };
    return {
        addTodo,
        getAllTodos,
        removeTodo,
        editTodo,
        getTodo,
        AddTaskOnTodo,
        deleteTaskFromTodo,
        editTaskFromTodo,
        changeCheck,
    };
})();

export default Todos;