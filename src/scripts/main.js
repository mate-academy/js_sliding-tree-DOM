'use strict';

const items = document.querySelectorAll('.tree li');

items.forEach((li) => {
  const childUl = li.querySelector('ul');
  const text = li.firstChild.textContent.trim();

  if (text && childUl) {
    const span = document.createElement('span');

    span.textContent = text;
    li.firstChild.replaceWith(span);

    childUl.style.overflow = 'hidden';
    childUl.style.maxHeight = childUl.scrollHeight + 'px';
    childUl.style.transition = 'max-height 0.3s ease';

    const fullHeight = childUl.scrollHeight;

    span.addEventListener('click', () => {
      if (childUl.style.maxHeight === '0px') {
        childUl.style.maxHeight = fullHeight + 'px';
      } else {
        childUl.style.maxHeight = '0px';
      }
    });
  }
});
