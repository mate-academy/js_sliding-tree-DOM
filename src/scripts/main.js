'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

li.forEach((element) => {
  const span = document.createElement('span');

  span.textContent = element.childNodes[0].textContent;
  element.childNodes[0].replaceWith(span);
});

tree.addEventListener('click', (e) => {
  let target = e.target;

  if (target.tagName.toLowerCase() === 'span') {
    target = target.parentElement;

    if (target && target.querySelector('ul')) {
      const ul = target.querySelector('ul');

      ul.hidden = !ul.hidden;
    }
  }
});
