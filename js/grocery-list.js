'use strict';

const addButton = document.querySelector('#add');
const clearButton = document.querySelector('#clear');
const emptyMessage = document.querySelector('#empty-list');
const inputField = document.querySelector('#input');
const shoppingList = document.querySelector('#shopping-list');

window.addEventListener('DOMContentLoaded', () => {
  const storedItems = getStoredItems();
  storedItems.forEach(renderItem);
  updateEmptyMessage();
});

addButton.addEventListener('click', () => {
  const text = inputField.value.trim();
  if (!text) return;

  const item = { id: Date.now(), value: text };
  addItemToStorage(item);
  renderItem(item);

  inputField.value = '';
  updateEmptyMessage();
});

clearButton.addEventListener('click', () => {
  shoppingList.innerHTML = '';
  localStorage.removeItem('shoppingList');
  updateEmptyMessage();
});

function renderItem(item) {
  const listItem = document.createElement('li');
  listItem.dataset.id = item.id;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.className = 'remove-btn';

  removeButton.addEventListener('click', () => {
    listItem.remove();
    removeItemFromStorage(item.id);
    updateEmptyMessage();
  });

  listItem.append(item.value, ' ', removeButton);
  shoppingList.append(listItem);
}

function getStoredItems() {
  return JSON.parse(localStorage.getItem('shoppingList')) || [];
}

function addItemToStorage(item) {
  const items = getStoredItems();
  items.push(item);
  localStorage.setItem('shoppingList', JSON.stringify(items));
}

function removeItemFromStorage(id) {
  const items = getStoredItems().filter((item) => item.id !== id);
  localStorage.setItem('shoppingList', JSON.stringify(items));
}

function updateEmptyMessage() {
  emptyMessage.classList.toggle('hidden', shoppingList.children.length > 0);
}