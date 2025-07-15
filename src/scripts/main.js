'use strict';

// write code here
document.addEventListener('DOMContentLoaded', function () {
  const tree = document.querySelector('.tree');
  const allLi = tree.querySelectorAll('li');

  for (const li of allLi) {
    const childUl = li.querySelector('ul');

    if (!childUl) {
      continue;
    }

    const text = li.firstChild;
    const span = document.createElement('span');

    span.textContent = text.textContent.trim();
    li.insertBefore(span, text);
    li.removeChild(text);

    span.style.cursor = 'pointer';

    span.addEventListener('click', () => {
      childUl.hidden = !childUl.hidden;
    });
  }
});
