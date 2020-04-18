'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', hideList);

function hideList(e) {
  const ul = e.target.nextElementSibling;

  if (!ul || ul.tagName !== 'UL' || e.target.tagName !== 'SPAN') {
    return;
  }

  ul.hidden = !ul.hidden;
}
