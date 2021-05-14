/* eslint-disable */

import Todos from '../src/todos';

describe('tests to addTodo', () => {
    test('should add todo', () => {
        const mainTodo = Todos.addTodo('code', 'write code');
        expect(mainTodo).toBe(mainTodo);
    });
});

describe('tests to removeTodo', () => {
    test('should remove todo', () => {
        const mainTodo = Todos.removeTodo(0, 'tracks', 'back-end');
        expect(mainTodo).toBe(mainTodo);
    });
});

describe('tests to getAllTodo', () => {
    const mainTodo = Todos.getAllTodos();
    expect(mainTodo).toBe(mainTodo);
})

/* eslint-enable */
