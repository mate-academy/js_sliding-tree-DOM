'use strict';

const headers = document.querySelectorAll('.tree li');

headers.forEach((li) => {
  const elem = li.querySelector('ul');

  if (elem) {
    elem.style.display = 'block';

    const childNodes = li.childNodes;

    childNodes.forEach((node) => {
      if (node.nodeType === 3 && node.textContent.trim() !== '') {
        const span = document.createElement('span');

        span.textContent = node.textContent;
        li.replaceChild(span, node);

        span.addEventListener('click', onClick);
      }
    });
  }
});

function onClick(eve) {
  const elem = eve.target.nextElementSibling;

  if (elem) {
    if (elem.style.display === 'none' || elem.style.display === '') {
      elem.style.display = 'block';
    } else {
      elem.style.display = 'none';
    }
  }
}
