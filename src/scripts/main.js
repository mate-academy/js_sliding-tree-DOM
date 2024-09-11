'use strict';

// write code here
const tree = document.querySelector('.tree');

function hideTree(element) {
  element.addEventListener('click', (e) => {
    const currentLi = e.target.closest('li');

    if (!currentLi || !currentLi.querySelector('ul')) {
      return;
    }

    const span = document.createElement('span');

    span.className = 'header';

    span.textContent = currentLi.childNodes[0].textContent.trim();

    if (!currentLi.classList.contains('expanded')) {
      currentLi.childNodes[0].remove();
      currentLi.insertBefore(span, currentLi.querySelector('ul'));
      currentLi.querySelector('ul').style.display = 'none';
      currentLi.classList.add('expanded');
    } else {
      currentLi.querySelector('ul').style.display = '';
      currentLi.classList.remove('expanded');
    }

    e.stopPropagation();
  });
}

hideTree(tree);
