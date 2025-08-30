'use strict';

const allTree = document.querySelector('.tree');
const allLi = allTree.querySelectorAll('li');

[...allLi].forEach((li) => {
  const valueLI = li.firstChild;

  if (valueLI.nodeType === 3) {
    const span = document.createElement('span');

    span.textContent = valueLI.nodeValue;

    li.replaceChild(span, valueLI);
  }
});

allTree.addEventListener('click', (e) => {
  const tagElement = e.target.tagName;
  const nextTagElement = e.target.nextElementSibling.tagName;

  if (tagElement === 'SPAN' && nextTagElement === 'UL') {
    const ul = e.target.nextElementSibling;
    const ulDisplay = ul.style.display;

    if (ulDisplay === '' || ulDisplay === 'block') {
      ul.style.display = 'none';
    } else {
      ul.style.display = 'block';
    }
  }
});
