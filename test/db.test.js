/* eslint-disable */

import LocalDB from '../src/db';

test('should add todo', () => {
    const dbTodo = LocalDB.saveTodos();
    expect(dbTodo).toBe(dbTodo);
});

test('should remove tasks', () => {
    const dbTodo = LocalDB.removeTasks('code');
    expect(dbTodo).toBe(dbTodo);
})

/* eslint-enable */
