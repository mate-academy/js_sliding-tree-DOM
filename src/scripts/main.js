'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  const childUl = li.querySelector('ul');

  if (childUl) {
    const text =
      li.firstChild && li.firstChild.textContent
        ? li.firstChild.textContent.trim()
        : '';

    if (text) {
      const span = document.createElement('span');

      span.textContent = text;
      li.firstChild.textContent = '';
      li.insertBefore(span, childUl);
    }
  }
});

document.querySelector('.tree').addEventListener('click', (e) => {
  let span = e.target.closest('span');

  if (!span && e.target.tagName === 'LI') {
    span = e.target.querySelector(':scope > span');
  }

  if (!span) {
    return;
  }

  const li = span.parentElement;
  const childUl = li.querySelector(':scope > ul');

  if (childUl) {
    childUl.hidden = !childUl.hidden;
  }
});
