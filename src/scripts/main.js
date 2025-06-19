'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  for (const li of tree.querySelectorAll('li')) {
    const firstChild = li.firstChild;

    if (firstChild.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');

      span.textContent = firstChild.textContent.trim();
      li.insertBefore(span, firstChild);
      li.removeChild(firstChild);
    }
  }

  tree.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const li = e.target.closest('li');
    const nestedUl = li.querySelector('ul');

    if (nestedUl) {
      nestedUl.hidden = !nestedUl.hidden;
    }
  });
});
