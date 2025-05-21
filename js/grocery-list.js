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
    const incrementButton = document.createElement('button');
    const decrementButton = document.createElement('button');
    deleteButton.textContent = "Remove";
    incrementButton.textContent = "+";
    decrementButton.textContent = "-";
    deleteButton.addEventListener("click", function(){
      groceryItems.splice(index, 1);
      renderList();
    });
    incrementButton.addEventListener('click', function(){
      groceryItems[index].quantity++;
      renderList();
    });
    decrementButton.addEventListener('click', function(){
      
      if (groceryItems[index].quantity > 1) {groceryItems[index].quantity--};
      renderList();
    });
    const itemNameSpan = document.createElement('span');
    itemNameSpan.textContent = item.name;
    const itemQuantitySpan = document.createElement('span');
    itemQuantitySpan.textContent = `${item.quantity} x `;
    shoppingList.prepend(listItem);
    listItem.append(itemQuantitySpan);
    listItem.append(itemNameSpan);
    listItem.append(incrementButton);
    listItem.append(decrementButton);
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
