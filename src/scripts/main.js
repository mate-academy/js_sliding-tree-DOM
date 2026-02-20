'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  const listItems = tree.querySelectorAll('li');

  listItems.forEach((li) => {
    const textNode = Array.from(li.childNodes).find(
      (node) => node.nodeType === 3 && node.textContent.trim(),
    );

    if (textNode) {
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();
      li.insertBefore(span, textNode);
      li.removeChild(textNode);
    }
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const li = e.target.parentElement;
    const childUl = li.querySelector(':scope > ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  });
});
