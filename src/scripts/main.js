'use strict';

const list = document.querySelectorAll('li');

const tree = document.querySelector('.tree');

tree.style.position = 'absolute';
tree.style.top = `${tree.getBoundingClientRect().y}px`;
tree.style.left = `${tree.getBoundingClientRect().x}px`;

const reg = /(ul)/g;

for (const item of list) {
  if (reg.test(item.outerHTML)) {
    const inner = item.firstChild.textContent;

    item.firstChild.textContent = '';

    item.insertAdjacentHTML('afterbegin',
      `<span class="title">${inner}</span>`);
  }
}

tree.addEventListener('click', function(event) {
  if (event.target.className !== 'title') {
    return;
  }

  event.target.nextElementSibling.hidden
  = !event.target.nextElementSibling.hidden;
  event.stopImmediatePropagation();
});
