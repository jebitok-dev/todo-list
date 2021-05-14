/* eslint-disable */
import Todo from '../src/todo';
import Task from '../src/task';

const myTodo = Todo('Todo App', 'Description');

describe('test for todo module', () => {
    test('should add a task to the todo', () => {
        myTodo.addTask('Code', 'Writing Code', 'Thursday', 'May 13th, 2021, 23:15', null, true);
        const todos = Task('Code', 'Writing Code', 'Thursday', 'May 13th, 2021, 23:15', null, true);
        expect(todos.length).not.toBeNull();
    })
})

describe('tests to getAllTasks', () => {
    test('should add task for a todo', () => {
        myTodo.getAllTasks('Developer Communities', 'Join more than one', 'Thursday', 'May 13th, 2021, 23:39', null, true);
        const todos = Task('Developer Communities', 'Join more than one', 'Thursday', 'May 13th, 2021, 23:39', null, true);
        expect(todos.length).not.toBeNull();
    });
});

describe('tests to removeTask', () => {
    test('should remove task from todo', () => {
        myTodo.removeTask('Pick a Stack', 'MERN Stack', 'Friday', 'May 14th, 2021, 5:20', null, true);
        const todos = Task('Pick a Stack', 'MERN Stack', 'Friday', 'May 14th, 2021, 5:20', null, true);
        expect(todos.length).not.toBeNull();
    });
});
/* eslint-enable */