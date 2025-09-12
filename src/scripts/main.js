'use strict';

const tree = document.querySelector('.tree');

if (tree) {
  const allLi = tree.querySelectorAll('li');
  const parents = Array.from(allLi).filter((li) => li.querySelector('ul'));

  for (const li of parents) {
    const textNode = Array.from(li.childNodes).find(
      (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== '',
    );

    if (textNode) {
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();
      li.insertBefore(span, textNode);
      li.removeChild(textNode);
    }
  }

  tree.addEventListener('click', (e) => {
    const target = e.target;

    if (!(target instanceof HTMLElement) || target.tagName !== 'SPAN') {
      return;
    }

    const li = target.parentElement;

    if (!li) {
      return;
    }

    const childUl = li.querySelector(':scope > ul');

    if (!childUl) {
      return;
    }
    childUl.hidden = !childUl.hidden;
  });
}
