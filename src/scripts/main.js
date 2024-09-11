'use strict';

const tree = document.querySelector('.tree');

function addSpanForLiHeader(element, nameOfClass) {
  const allLi = element.querySelectorAll('li');

  for (const li of allLi) {
    if (!li.querySelector('ul')) {
      continue;
    } else {
      const span = document.createElement('span');

      span.className = nameOfClass;
      span.textContent = li.childNodes[0].textContent.trim();

      li.childNodes[0].remove();
      li.insertBefore(span, li.querySelector('ul'));
    }
  }
}

function hideTree(element) {
  addSpanForLiHeader(element, 'header');

  element.addEventListener('click', (e) => {
    const currentLi = e.target.closest('li');

    if (!currentLi || !currentLi.querySelector('ul')) {
      return;
    }

    const ul = currentLi.querySelector('ul');

    if (!ul.style.display || ul.style.display === 'block') {
      ul.style.display = 'none';
      currentLi.classList.add('expanded');
    } else {
      ul.style.display = 'block';
      currentLi.classList.remove('expanded');
    }

    e.stopPropagation();
  });
}

hideTree(tree);
