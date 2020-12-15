'use strict';

const toggleHeadline = (e) => {
  if (e.target.closest('span')) {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  [...tree.querySelectorAll('li')].forEach((li) => {
    if (li.tagName !== 'LI' || !li.children.length) {
      return;
    }

    const headline = li.firstChild;
    const span = document.createElement('span');

    span.innerHTML = headline.textContent;

    headline.remove();
    li.prepend(span);
  });

  tree.addEventListener('click', toggleHeadline);
});
