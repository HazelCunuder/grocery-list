'use strict';

const addButton = document.getElementById('add');
const clearButton = document.getElementById('clear');
const emptyMessage = document.getElementById('empty-list');
const inputField = document.getElementById('input');
const shoppingList = document.getElementById('shopping-list');

let groceryItems = [];
renderList();

function renderList() {
  console.log("rendering List...");
  groceryItems.length === 0 ? emptyMessage.style.display = "block"
  : emptyMessage.style.display = "none";
};


