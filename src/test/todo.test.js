/* eslint-disable */
import Todo from '../todo';
import Task from '../task';

const myTodo = Todo('Todo App', 'Description');

test('should add a task to the todo', () => {
    myTodo.addTask('Code', 'Writing Code', 'Thursday', 'May 13th, 2021, 23:15', null, true);
    const todos = Task('Code', 'Writing Code', 'Thursday', 'May 13th, 2021, 23:15', null, true);
    expect(todos.length).not.toBeNull();
})

test('should get all task for a todo', () => {
    myTodo.getAllTasks('Developer Communities', 'Join more than one', 'Thursday', 'May 13th, 2021, 23:39', null, true);
    const todos = Task('Developer Communities', 'Join more than one', 'Thursday', 'May 13th, 2021, 23:39', null, true);
    expect(todos.length).not.toBeNull();
});

test('edit task', () => {
    myTodo.editTask(0, 'Code', 'Write code', 'Friday', 'May 14th, 2021, 5:45', null, true);
    const todos = Task('Code', 'Write code', 'Friday', 'May 14th, 2021, 5:45', null, true);
    expect(todos.length).not.toBeNull();
})

test('should remove task from todo', () => {
    myTodo.removeTask('Pick a Stack', 'MERN Stack', 'Friday', 'May 14th, 2021, 5:20', null, true);
    const todos = Task('Pick a Stack', 'MERN Stack', 'Friday', 'May 14th, 2021, 5:20', null, true);
    expect(todos.length).not.toBeNull();
});

test('change checked task', () => {
    myTodo.changeCheckedTask(0, true);
    const todos = Task('Pick a Stack', 'MERN Stack', 'Friday', 'May 14th, 2021, 5:20', null, true);
    expect(todos.length).not.toBeNull();
})

/* eslint-enable */