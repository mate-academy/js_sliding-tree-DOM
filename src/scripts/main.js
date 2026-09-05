'use strict';

// write code here
const li = document.querySelectorAll('li');

for (const el of li) {
  const span = document.createElement('span');
  span.append(el.firstChild);
  el.prepend(span);
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const needList = e.target.parentElement.querySelector('ul');

  if (!needList) {
    return;
  }

  needList.hidden = !needList.hidden;
});