'use strict';

// write code here
const tree = document.querySelector('.tree');
const lists = [...document.querySelectorAll('li')]
  .filter(li => li.children.length > 0);

for (const list of lists) {
  const span = document.createElement('span');

  span.classList.add('hidden');
  span.textContent = list.firstChild.textContent.trim();

  list.firstChild.replaceWith(span);
}

tree.addEventListener('click', clickEvent => {
  if (clickEvent.target.className === 'hidden') {
    clickEvent.target.nextElementSibling.hidden
    = !clickEvent.target.nextElementSibling.hidden;
  }
});
