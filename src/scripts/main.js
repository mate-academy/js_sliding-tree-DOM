'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const li of listItems) {
  if (li.children.length > 0) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

list.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'SPAN') {
    target.nextSibling.hidden = !target.nextSibling.hidden;
  }
});
