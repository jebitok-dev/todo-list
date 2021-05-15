/* eslint-disable */

import Task from '../task';

const taskCheck = Task('Title', 'Description');

test('change check', () => {
    taskCheck.changeCheck(0, true);
    const todos = Task('Pick a Stack', 'MERN Stack', 'Friday', 'May 14th, 2021, 5:20', null, true);
    expect(todos.length).not.toBeNull();
});

/* eslint-enable */
