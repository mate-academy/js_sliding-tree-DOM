'use strict';

// write code here
const listTree = document.querySelector('.tree');

function listSpan(item) {
  if (item.length < 2) {
    return;
  }

  [...item].map((elem) => {
    if (!elem.tagName && elem.textContent.trim().length > 1) {
      const span = document.createElement('span');

      span.innerHTML = elem.textContent;
      elem.textContent = '';
      elem.parentElement.prepend(span);
    }

    listSpan(elem.childNodes);
  });
}

listSpan(listTree.childNodes);

listTree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
