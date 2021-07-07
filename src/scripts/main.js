'use strict';

const tree = document.querySelector('.tree');
const lists = tree.querySelectorAll('ul');

tree.style.cssText = 'position: absolute; top: 200px; left: 600px;';

for (const elem of lists) {
  const listName = elem.previousSibling.data.trim();

  elem.previousSibling.remove();

  elem.insertAdjacentHTML('beforebegin', `<span>${listName}</span>`);
};

tree.addEventListener('click', ({ target }) => {
  if (target.tagName === 'SPAN') {
    const element = target.nextElementSibling;

    element.hidden = !element.hidden;
  }
});
