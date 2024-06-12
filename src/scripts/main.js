'use strict';

const tree = document.querySelector('.tree').children;

addSpanToElem(tree);

const treeSpans = document.querySelectorAll('.tree span');

treeSpans.forEach((span) => {
  span.addEventListener('click', (e) => {
    const nextSimbling = span.nextElementSibling;

    nextSimbling.style.display =
      nextSimbling.style.display === 'none' ? 'block' : 'none';
  });
});

function addSpanToElem(elems) {
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i];

    if (elem.firstElementChild && elem.firstElementChild.tagName === 'UL') {
      if (elem.firstChild && elem.firstChild.data.length > 0) {
        const span = document.createElement('span');

        span.textContent = elem.firstChild.data.trim();

        elem.replaceChild(span, elem.firstChild);
      }

      addSpanToElem(elem.lastElementChild.children);
    }
  }
}
