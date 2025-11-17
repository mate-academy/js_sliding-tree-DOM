'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('.tree li');

for (const li of listItems) {
  const firstChild = li.firstChild;

  if (firstChild.nodeType === 3 && firstChild.textContent.trim() !== '') {
    const span = document.createElement('span');
    const text = firstChild.textContent;

    li.insertBefore(span, firstChild);
    span.textContent = text;
    li.removeChild(firstChild);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');
  const childUl = li.querySelector(':scope > ul');

  if (!childUl) {
    return;
  }

  childUl.hidden = !childUl.hidden;
});
