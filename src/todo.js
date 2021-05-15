import Task from './task';

const Todo = (title, description) => {
    const Tasks = [];
    
    const addTask = (title, description, dueDate, priority, notes, checked) => {
        Tasks.push(Task(title, description, dueDate, priority, notes, checked));
    };

    const getAllTasks = () => Tasks;

    const removeTask = (index) => {
        Tasks.splice(index, 1);
    };

    const getTask = (index) => Tasks[index];

    const editTask = (index, title, description, dueDate, lists, priority) => {
        Tasks[index].title = title;
        Tasks[index].description = description;
        Tasks[index].dueDate = dueDate;
        Tasks[index].lists = lists;
        Tasks[index].priority = priority;
    };

    const changeCheckedTask = (index, checked) => {
        Tasks[index] = checked;
    };

    return {
        title, description, addTask, getAllTasks, removeTask, getTask, editTask, changeCheckedTask,
    };
};

export default Todo;