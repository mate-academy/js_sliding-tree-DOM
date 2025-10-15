'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const allLi = document.querySelectorAll('li');

  allLi.forEach((li) => {
    const childUl = li.querySelector(':scope > ul');

    if (!childUl) {
      return;
    }

    const nodes = Array.from(li.childNodes);
    const ulIndex = nodes.indexOf(childUl);
    const textNode = nodes.find(
      (n, i) =>
        n.nodeType === Node.TEXT_NODE && n.textContent.trim() && i < ulIndex,
    );

    if (!textNode) {
      return;
    }

    const span = document.createElement('span');

    span.textContent = textNode.textContent;
    li.replaceChild(span, textNode);

    const initialDisplay = getComputedStyle(childUl).display;

    span.addEventListener('click', (e) => {
      e.stopPropagation();

      const isHidden = getComputedStyle(childUl).display === 'none';

      if (isHidden) {
        childUl.style.display =
          initialDisplay === 'none' || !initialDisplay ? '' : initialDisplay;
      } else {
        childUl.style.display = 'none';
      }
    });
  });
});
