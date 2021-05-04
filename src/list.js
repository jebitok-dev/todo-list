const renderList = (() => {
  const listsContainer = document.querySelector('[data-lists]');
  const newListForm = document.querySelector('[data-new-list-form]');
  const newListInput = document.querySelector('[data-new-list-input]');
  const deleteListButton = document.querySelector('[data-delete-list-button]');
  const listDisplayContainer = document.querySelector('[data-list-display-container]');
  const listTitleElement = document.querySelector('[data-list-title]');
  const listCountElement = document.querySelector('[data-list-count]');

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
})();
export { renderList };