'use strict';

// write code here

const liItems = document.querySelectorAll('li');

for (const li of liItems) {
  const span = document.createElement('span');
  const text = li.childNodes[0].textContent.trim();

  li.childNodes[0].remove();

  span.innerText = text;

  li.prepend(span);
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const item = e.target.closest('span');
  const sibling = item.nextElementSibling;

  sibling.hidden = !sibling.hidden;
});
