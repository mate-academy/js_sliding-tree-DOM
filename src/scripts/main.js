'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  const span = document.createElement('span');

  if (item.children.length > 0) {
    item.prepend(span);
    span.className += 'accordion-span-hover-js';
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', accordionList, false);

function accordionList(e) {
  const target = e.target;

  if (target.className !== 'accordion-span-hover-js' || !target.nextSibling) {
    return;
  }

  if (target.nextSibling.style.display === 'none') {
    target.nextSibling.style.display = 'block';
  } else {
    target.nextSibling.style.display = 'none';
  }
}
