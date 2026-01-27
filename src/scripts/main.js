'use strict';

// write code here

const tree = document.querySelector('.tree');

const list = document.querySelectorAll('li');

list.forEach((el) => {
  if (el.firstChild.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = el.firstChild.textContent;

    el.firstChild.remove();

    el.insertBefore(span, el.firstChild);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.parentElement;
  const ul = li.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.hidden = !ul.hidden;
});
