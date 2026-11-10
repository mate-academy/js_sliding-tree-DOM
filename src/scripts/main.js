'use strict';

// write code here
const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

for (const item of items) {
  const span = document.createElement('span');

  span.append(item.childNodes[0].textContent.trim());
  item.childNodes[0].replaceWith(span);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const item = e.target.parentElement;

  if (item.children[1]) {
    const sublist = item.children[1];

    sublist.hidden = !sublist.hidden;
  }
});
