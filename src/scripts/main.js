'use strict';

const tree = document.querySelector('.tree');
const listLi = tree.querySelectorAll('li');

listLi.forEach((li) => {
  if (li.querySelector('ul')) {
    const title = li.firstChild;

    if (title.nodeType !== 3) {
      return;
    }

    const span = document.createElement('span');

    span.textContent = title.textContent.trim();

    title.replaceWith(span);
  }
});

tree.addEventListener('click', (e) => {
  if (!tree) {
    return;
  }

  if (e.target.tagName === 'SPAN') {
    const target = e.target;

    if (target.classList.contains('off')) {
      target.classList.remove('off');
      target.classList.add('on');
    } else {
      target.classList.remove('on');
      target.classList.add('off');
    }

    const child = target.nextElementSibling;

    if (child.tagName === 'UL') {
      switch (target.className) {
        case 'on':
          child.style.display = 'block';
          break;

        case 'off':
          child.style.display = 'none';
          break;
      }
    }
  }
});
