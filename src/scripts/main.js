'use strict';

const tree = document.querySelector('.tree');
const listCollection = document.querySelectorAll('li');

tree.addEventListener('click', (clickEvent) => {
  const selectedElement = clickEvent.target;
  const ul = selectedElement.closest('li').querySelector('ul');

  if (ul.style.display === 'none') {
    ul.style.display = '';
  } else {
    ul.style.display = 'none';
  }
});

for (const li of listCollection) {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent;
  li.firstChild.replaceWith(span);
}
