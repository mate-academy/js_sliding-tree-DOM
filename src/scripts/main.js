'use strict';

const liElements = document.querySelectorAll('li');

liElements.forEach((li) => {
  const child = li.firstChild;

  if (child && child.nodeType === 3 && child.textContent.trim() !== '') {
    const span = document.createElement('span');

    span.textContent = child.textContent.trim();
    li.replaceChild(span, child);

    span.addEventListener('click', (e) => {
      const nestedUl = li.querySelector(':scope > ul');

      if (nestedUl) {
        nestedUl.hidden = !nestedUl.hidden;
      }
      e.stopPropagation();
    });
  }
});
