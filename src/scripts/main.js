'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  const listOfLi = tree.querySelectorAll('li');

  if (!listOfLi) {
    return;
  }

  for (const li of listOfLi) {
    const span = document.createElement('span');

    li.prepend(span);

    const text = span.nextSibling;

    if (text && text.nodeType === Node.TEXT_NODE) {
      span.append(text);
    }
  }

  tree.addEventListener('click', (e) => {
    const span = e.target.closest('span');

    if (!span) {
      return;
    }

    if (!tree.contains(span)) {
      return;
    }

    const li = span.parentElement;

    if (!li) {
      return;
    }

    const childUL = li.querySelector(':scope > ul');

    if (!childUL) {
      return;
    }

    childUL.hidden = !childUL.hidden;
  });
});
