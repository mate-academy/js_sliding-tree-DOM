'use strict';

const titleList = document.querySelectorAll('.tree li');

titleList.forEach((li) => {
  if (li.children.length > 0) {
    const textNode = li.childNodes[0];
    const spanTag = document.createElement('span');

    spanTag.appendChild(textNode);
    li.insertBefore(spanTag, li.firstChild);
  }
});

const spans = document.querySelectorAll('.tree span');

spans.forEach((span) => {
  span.addEventListener('click', (e) => {
    const parentLi = e.target.parentElement;
    const child = parentLi.firstElementChild.nextElementSibling;

    if (child) {
      child.style.display = child.style.display === 'none' ? '' : 'none';
    }
  });
});
