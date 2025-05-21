'use strict';

const addButton = document.getElementById('add');
const clearButton = document.getElementById('clear');
const emptyMessage = document.getElementById('empty-list');
const inputField = document.getElementById('input');
const shoppingList = document.getElementById('shopping-list');
const itemQuantity = document.getElementById('quantityInput')

let groceryItems = [];
renderList();

function renderList() {
    shoppingList.innerHTML = "";
  groceryItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Remove";
    deleteButton.addEventListener("click", function(){
      groceryItems.splice(index, 1);
      renderList();
    });
    listItem.textContent = `${item.quantity}x ${item.name}`;
    shoppingList.prepend(listItem);
    listItem.append(deleteButton);
  });
  groceryItems.length === 0 ? emptyMessage.style.display = "block"
  : emptyMessage.style.display = "none";
};

addButton.addEventListener("click", function(){
  const quantity = parseInt(itemQuantity.value);
  const newItem = inputField.value;
  if (newItem.trim() !== ''){
    groceryItems.push({name: newItem, quantity: quantity});
    inputField.value = "";
    itemQuantity.value = 1;
    renderList();
  }
});

clearButton.addEventListener("click", function(){
  groceryItems = [];
  renderList();
});
