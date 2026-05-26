'use strict';

const allLi = document.querySelectorAll('li');

for (const li of allLi) {
  const firstChild = li.childNodes[0];

  if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    li.insertBefore(span, firstChild);
    span.appendChild(firstChild);
  }
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.parentElement;

  const nestedUl = parentLi.querySelector('ul');

  if (!nestedUl) {
    return;
  }

  nestedUl.hidden = !nestedUl.hidden;
});
