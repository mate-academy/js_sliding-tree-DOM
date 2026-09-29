'use strict';

// write code here
const allLists = document.body.querySelectorAll('li:has(ul)');

allLists.forEach((li) => {
  const span = document.createElement('span');
  const text = li.firstChild.textContent.trim();

  span.textContent = text;
  li.firstChild.replaceWith(span);

  span.addEventListener('click', () => {
    const ul = li.querySelector('ul');

    ul.hidden = !ul.hidden;
  });
});
