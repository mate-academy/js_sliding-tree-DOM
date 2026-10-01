'use strict';

const tree = document.querySelector('.tree');

if (tree) {
  const listItems = tree.querySelectorAll('li');

  listItems.forEach((li) => {
    const textNode = Array.from(li.childNodes).find(
      (node) =>
        node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
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

    const parentLi = e.target.parentElement;
    const nestedUl = parentLi ? parentLi.querySelector('ul') : null;

    if (nestedUl) {
      nestedUl.hidden = !nestedUl.hidden;
    }
  });
}
