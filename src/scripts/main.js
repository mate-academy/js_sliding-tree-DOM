'use strict';

const tree = document.querySelector('.tree');
const list = tree.querySelectorAll('li');

list.forEach(li => {
  if (li.childNodes[0].nodeName !== '#text') {
    return;
  }

  const span = document.createElement('span');

  span.innerText = li.childNodes[0].data.trim();

  li.childNodes[0].replaceWith(span);
});

tree.addEventListener('click', function(e) {
  const title = e.target;

  if (title.tagName !== 'SPAN') {
    return;
  }

  const ul = title.parentNode.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.hidden = !ul.hidden;
});
