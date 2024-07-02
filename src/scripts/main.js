'use strict';

const spans = document.querySelectorAll('.tree span');

spans.forEach((span) => {
  span.addEventListener('click', (e) => {
    e.stopPropagation();

    const nextUl = span.nextElementSibling;

    if (nextUl && nextUl.tagName === 'UL') {
      nextUl.style.display = nextUl.style.display === 'none' ? 'block' : 'none';
    }
  });
});
