'use strict';

const tree = document.querySelectorAll('.tree li');

tree.forEach((li) => {
  if (li.childNodes.length > 1) {
    const headerText = li.firstChild.textContent.trim();
    const span = document.createElement('span');

    span.append(headerText);
    li.firstChild.replaceWith(span);

    span.addEventListener('click', (e) => {
      e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
    });
  }
});
