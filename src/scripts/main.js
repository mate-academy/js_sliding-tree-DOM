'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const tree = document.querySelector('.tree');

  const wrapTextWithSpan = (element) => {
    if (element.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');

      span.textContent = element.textContent.trim();
      element.parentNode.insertBefore(span, element);
      element.parentNode.removeChild(element);
    }
  };

  const wrapTreeItems = (ul) => {
    Array.from(ul.children).forEach((li) => {
      Array.from(li.childNodes).forEach(wrapTextWithSpan);

      const nestedUl = li.querySelector('ul');

      if (nestedUl) {
        wrapTreeItems(nestedUl);
      }
    });
  };

  wrapTreeItems(tree);

  tree.addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN') {
      const parentLi = e.target.parentNode;
      const nestedUl = parentLi.querySelector('ul');

      if (nestedUl) {
        nestedUl.hidden = !nestedUl.hidden;
      }
    }
  });
});
