'use strict';

const addFunc = () => {
  const tree = document.querySelector('.tree');

  tree.addEventListener('click', e => {
    if (e.target.tagName === 'SPAN') {
      if (e.target.nextSibling.style.display === 'none') {
        e.target.nextSibling.style.display = 'block';
      } else {
        e.target.nextSibling.style.display = 'none';
      }
    }
  });

  for (const item of [...document.querySelectorAll('li')]) {
    const newSpan = document.createElement('span');

    item.prepend(newSpan);
    newSpan.appendChild(newSpan.nextSibling);
    newSpan.classList.add('list__item');
  }
};

addFunc();
