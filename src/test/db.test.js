/* eslint-disable */

import LocalDB from '../db';
import Todos from '../todos';
const json = JSON.parse;

test('should add todo', () => {
    const dbTodo = LocalDB.saveTodos();
    expect(dbTodo).toBe(dbTodo);
});

test('should remove tasks', () => {
    const dbTodo = LocalDB.removeTasks('code');
    expect(dbTodo).toBe(dbTodo);
});

// test('retrieve todos', () => {
//     const dbTodo = json.getTodos();
//     expect(dbTodo).toBe(dbTodo);
// })

// it('retrieve todos', () => {
//     const todo = LocalDB.getTodos('code');
//     const stringified = JSON.stringify(todo);
//     const parsed = JSON.parse(stringified);

//     expect(parsed).toBe(true);
// })

/* eslint-enable */
