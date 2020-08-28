'use strict';

// write code here
const list = document.querySelector('ul.tree');

const li = document.querySelectorAll('li');

for (let i = 0; i < li.length; i++) {
  const createSpan = document.createElement('span');

  const text = li[i].firstChild.textContent;

  li[i].firstChild.remove();
  li[i].prepend(createSpan);

  const createSpan2 = document.querySelectorAll('span');

  createSpan2[i].innerHTML += text;
}

list.addEventListener('click', (event) => {
  const item = event.target;

  if (item.parentElement.children[1].hidden === false) {
    item.parentElement.children[1].hidden = true;
  } else {
    item.parentElement.children[1].hidden = false;
  }
});
