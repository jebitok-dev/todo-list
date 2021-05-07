const Task = (title, description, dueDate, priority, lists, checked) => {
    if (!(dueDate instanceof Date)) {
        dueDate = new Date(dueDate);
    }

    const getDueDate = () => dueDate;
    const setDueDate = (newDate) => { dueDate = newDate; };
    const getChecked = () => checked;
    const changeCheck = () => {
        checked = !checked;
    };
    return {
        title,
        description,
        priority,
        lists,
        dueDate,
        checked,
        getDueDate,
        setDueDate,
        getChecked,
        changeCheck,
    };
};

export default Task;