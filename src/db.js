import Todo from './todo';

const LocalDB = (() => {
    const saveTodos = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const saveTodo = (title, Tasks) => {
        localStorage.setItem(title, JSON.stringify(Tasks));
    };

    const getTodos = () => {
        const todos = [];
        if (Object.prototype.hasOwnProperty.call(localStorage, 'todos')) {
            const retrievedTodos = JSON.parse(localStorage.getItem('todos'));
            retrievedTodos.forEach((todo) => {
                todos.push(Todo(todo.title, todo.description));
                if (Object.prototype.hasOwnProperty.call(localStorage, todo.title)) {
                    const retrievedTasks = JSON.parse(localStorage.getItem(todo.title));
                    retrievedTasks.forEach((Task) => {
                        todos[todos.length - 1].addTask(
                            Task.title,
                            Task.description,
                            Task.dueDate,
                            Task.priority,
                            Task.lists,
                            Task.checked,
                        );
                    });
                }
            });
        }
        return todos;
    };

    const removeTasks = (title) => {
        localStorage.removeItem(title);
    };
    return {
        saveTodo,
        getTodos,
        removeTasks,
        saveTodos,
    }
})();

export default LocalDB;