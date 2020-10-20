'use strict';

const tree = document.querySelector('.tree');
const list = tree.querySelectorAll('ul');

tree.style.cssText = 'position: absolute; top: 200px; left: 600px;';

for (const elem of list) {
  const listName = elem.previousSibling.data.trim();

  elem.previousSibling.remove();

  elem.insertAdjacentHTML('beforebegin', `<span>${listName}</span>`);
};

tree.addEventListener('click', (event) => {
  const target = event.target;

  if (target.tagName === 'SPAN') {
    const element = target.nextElementSibling;

    element.hidden = !element.hidden;
  }
});
