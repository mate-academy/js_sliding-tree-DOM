'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  function wrapTextInSpan(element) {
    const childNodes = Array.from(element.childNodes);

    childNodes.forEach((node) => {
      if (node.nodeType === 3) {
        const span = document.createElement('span');

        span.textContent = node.textContent;
        node.parentNode.replaceChild(span, node);
      }
    });
  }

  tree.querySelectorAll('li').forEach((li) => {
    if (li.querySelectorAll('ul')) {
      wrapTextInSpan(li);
    }
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const nestedUl = e.target.nextElementSibling;

      if (nestedUl && nestedUl.tagName === 'UL') {
        nestedUl.hidden = !nestedUl.hidden;
      }
    }
  });
});
