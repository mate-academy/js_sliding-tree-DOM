'use strict';

const tree = document.querySelector('.tree');

function tr(element) {
  if (!element) {
    return;
  }

  for (const li of element.children) {
    const text = li.firstChild.textContent.trim();

    li.firstChild.textContent = '';
    li.insertAdjacentHTML('afterbegin', `<span>${text}</span>`);

    const ul = li.querySelector('ul');
    const span = li.querySelector('span');

    if (!ul) {
      continue;
    }

    span.addEventListener('click', () => {
      if (window.getComputedStyle(ul).display === 'block') {
        ul.style.display = 'none';
      } else {
        ul.style.display = 'block';
      }
    });

    tr(ul);
  }
}

tr(tree);
