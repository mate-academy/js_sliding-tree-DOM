'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  const span = document.createElement('span');

  span.appendChild(li.firstChild);
  li.prepend(span);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const sublist = e.target.nextElementSibling;

    if (sublist && sublist.tagName === 'UL') {
      sublist.hidden = !sublist.hidden;
    }
  }
});
