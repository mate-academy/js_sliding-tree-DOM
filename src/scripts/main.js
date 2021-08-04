'use strict';

// write code here
const tree = document.querySelector('.tree');
const headers = document.querySelectorAll('li');

for (const li of headers) {
  const span = document.createElement('span');

  if (li.childElementCount > 0) {
    li.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
