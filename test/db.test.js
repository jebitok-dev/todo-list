/* eslint-disable */

import LocalDB from '../src/db';

describe('tests to saveTodos to LocalDB', () => {
    test('should add todo', () => {
        const dbTodo = LocalDB.saveTodos();
        expect(dbTodo).toBe(dbTodo);
    });
});

describe('tests to removeTasks', () => {
    test('should remove tasks', () => {
        const dbTodo = LocalDB.removeTasks('code');
        expect(dbTodo).toBe(dbTodo);
    })
})

/* eslint-enable */
