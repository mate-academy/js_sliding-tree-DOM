'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  [...tree.querySelectorAll('li')].forEach(el => {
    if (el.children.length !== 0) {
      const span = document.createElement('span');

      span.innerHTML = el.firstChild.textContent.trim();

      el.firstChild.replaceWith(span);
    }
  });

  tree.addEventListener('click', e => {
    const { target } = e;

    if (target.tagName === 'SPAN') {
      const nextTag = target.nextSibling;

      nextTag.hidden = !nextTag.hidden;
    }
  });
});
