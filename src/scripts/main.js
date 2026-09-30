'use strict';

// write code here

const tree = document.querySelector('.tree');
// const types = tree.children;
// console.log(products);

const listItems = tree.querySelectorAll('li');

for (const li of listItems) {
  const nestedUl = li.querySelector(':scope > ul');
  if (!nestedUl) {
    continue;
  }

  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();

  li.firstChild.replaceWith(span);
}

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');
  if (!span || !tree.contains(span)) {
    return;
  }

  const li = span.parentElement;
  const nestedUl = li.querySelector(':scope > ul');

  if (!nestedUl) {
    return;
  }

  if (nestedUl.style.display === 'none') {
    nestedUl.style.display = 'block';
  } else {
    nestedUl.style.display = 'none';
  }
});
