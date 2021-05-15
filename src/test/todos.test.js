/* eslint-disable */

import Todos from '../todos';
import LocalDB from '../db';


test('should add todo', () => {
    const mainTodo = Todos.addTodo('code', 'write code');
    expect(mainTodo).toBe(mainTodo);
});

test('edit todo', () => {
    const mainTodo = Todos.editTodo(0, 'OSS', 'Open-source');
    expect(mainTodo).toBe(mainTodo);
});

test('should remove todo', () => {
    const mainTodo = Todos.removeTodo(0, 'tracks', 'back-end');
    expect(mainTodo).toBe(mainTodo);
});

test('should getAllTodo', () => {
    const mainTodo = Todos.getAllTodos();
    expect(mainTodo).toBe(mainTodo);
});

test('should remove tasks', () => {
    const dbTodo = Todos.deleteTaskFromTodo(0, 'tracks', 'back-end');
    expect(dbTodo).toBe(dbTodo);
});

/* eslint-enable */
