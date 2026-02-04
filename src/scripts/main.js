'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

for (const item of items) {
  const ul = item.querySelector('ul');

  if (ul) {
    const titleText = item.firstChild.textContent.trim();

    const span = document.createElement('span');

    span.textContent = titleText;

    item.replaceChild(span, item.firstChild);

    span.addEventListener('click', () => {
      ul.hidden = !ul.hidden;
    });
  }
}
