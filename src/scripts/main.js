'use strict';

const tree = document.querySelector('.tree');
const allLi = tree.querySelectorAll('li');
const parents = Array.from(allLi).filter((li) => li.querySelector('ul'));

if (parents.length) {
  for (const li of parents) {
    const textNode = li.firstChild;

    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();
      li.insertBefore(span, textNode);
      li.removeChild(textNode);
    }
  }
}

tree.addEventListener('click', (e) => {
  const target = e.target;

  if (!(target instanceof HTMLElement) || target.tagName !== 'SPAN') {
    return undefined;
  }

  const li = target.parentElement;

  if (!li) {
    return undefined;
  }

  const childUl = li.querySelector(':scope > ul');

  childUl.hidden = !childUl.hidden;
});
