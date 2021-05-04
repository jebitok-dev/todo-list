const renderTask = (() => {
  const tasksContainer = document.querySelector('[data-tasks]');
  const tasksTemplate = document.querySelector('#task-template');
  const newTaskForm = document.querySelector('[data-new-task-form]');
  const newTaskInput = document.querySelector('[data-new-task-input]');
  const newTaskPriority = document.querySelector('#description');
  const clearCompleteTasksBUtton = document.querySelector(
    '[data-clear-complete-tasks-button]'
  );
})();
export { renderTask };