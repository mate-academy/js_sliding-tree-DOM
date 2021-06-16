'use strict';

const tree = document.querySelector('.tree');
const headers = tree.querySelectorAll('li');

for (const elem of headers) {
  const span = document.createElement('span');

  if (elem.childElementCount > 0) {
    elem.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.onclick = function(e) {
  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
};
