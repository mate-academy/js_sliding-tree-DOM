'use strict';

const tree = document.querySelector('.tree');
const listLi = tree.querySelectorAll('li');

listLi.forEach((li) => {
  if (li.querySelector('ul')) {
    const title = li.firstChild;

    const span = document.createElement('span');

    span.innerText = title.textContent.trim();

    title.replaceWith(span);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const target = e.target;

    if (target.className === 'off') {
      target.className = 'on';
    } else {
      target.className = 'off';
    }

    const child = target.nextElementSibling;

    switch (target.className) {
      case 'on':
        child.style.display = 'block';
        break;

      case 'off':
        child.style.display = 'none';
        break;
    }
  }
});
