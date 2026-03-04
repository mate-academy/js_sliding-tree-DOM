'use strict';

const tree = document.querySelector('.tree');

const listItems = tree.querySelectorAll('li');

for (const li of listItems) {
  const span = document.createElement('span');

  const textNode = li.firstChild;

  span.appendChild(textNode);

  li.prepend(span);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const ul = e.target.nextElementSibling;

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  }
});
