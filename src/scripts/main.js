'use strict';

const list = document.querySelectorAll('.tree li');

for (const li of list) {
  if (li.children.length) {
    const liBranch = li.firstChild;
    const span = document.createElement('span');

    span.textContent = liBranch.textContent;

    liBranch.replaceWith(span);

    span.addEventListener('click', () => {
      const sibling = span.nextElementSibling;

      if (sibling) {
        sibling.style.display = sibling.style.display === 'none' ? '' : 'none';
      }
    });
  }
}
