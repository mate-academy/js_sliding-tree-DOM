'use strict';

const tree = document.querySelector('.tree');
const liElements = tree.querySelectorAll('li');

for (const item of liElements) {
  if (item.children.length > 0) {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent.trim();
    item.firstChild.replaceWith(span);
  }
}

tree.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'SPAN') {
    const nestedList = target.nextElementSibling;
    const isHidden = nestedList.style.display === 'none';

    nestedList.style.display = isHidden ? 'block' : 'none';
  }
});
