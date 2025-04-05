'use strict';

const tree = document.querySelector('.tree');

Array.from(document.querySelectorAll('li'))
  .filter((headling) => {
    return headling.querySelector('ul') !== null;
  })
  .forEach((headling) => {
    const newSpan = document.createElement('span');

    newSpan.textContent = headling.childNodes[0].textContent.trim();
    headling.replaceChild(newSpan, headling.childNodes[0]);
  });

tree.addEventListener('click', (e) => {
  if (e.target.closest('span')) {
    const ulToHide = e.target.closest('li').childNodes[1];

    if (ulToHide.style.display === 'none') {
      ulToHide.style.display = 'block';
    } else {
      ulToHide.style.display = 'none';
    }
  }
});
