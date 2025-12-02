'use strict';

const tree = document.querySelector('.tree');
const list = tree.querySelectorAll('li');

for (const li of list) {
  const firstLi = li.firstChild;

  if (!firstLi || firstLi.nodeType !== 3) {
    continue;
  }

  const span = document.createElement('span');

  span.textContent = firstLi.textContent.trim();
  li.insertBefore(span, firstLi);
  li.removeChild(firstLi);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.parentElement;
  const childUl = li.querySelector(':scope > ul');

  if (!childUl) {
    return;
  }

  if (childUl.style.display === 'none') {
    childUl.style.display = '';
  } else {
    childUl.style.display = 'none';
  }
});
