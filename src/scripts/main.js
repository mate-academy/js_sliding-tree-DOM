'use strict';

const tree = document.querySelector('.tree');
const titles = [...tree.querySelectorAll('li')];

titles.forEach((li) => {
  const span = document.createElement('span');
  const titleText = li.firstChild;

  span.append(titleText);

  span.addEventListener('click', () => {
    const ul = span.parentElement.querySelector('ul');

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  });

  li.prepend(span);
});
