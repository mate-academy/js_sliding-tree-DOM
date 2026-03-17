'use strict';

const tree = document.querySelector('.tree');

const listOfLi = tree.querySelectorAll('li');

for (const item of listOfLi) {
  const span = document.createElement('span');

  const textNode = item.firstChild;

  span.appendChild(textNode);

  item.prepend(span);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const ul = e.target.nextElementSibling;

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  }
});
