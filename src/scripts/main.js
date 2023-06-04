'use strict';

const tree = document.querySelector('.tree');

const liCollection = document.querySelectorAll('li');

liCollection.forEach(li => {
  if (li.firstElementChild) {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent;
    li.replaceChild(span, li.firstChild);
  };
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  };

  const content = e.target.nextElementSibling;

  content.hidden = !content.hidden;
});
