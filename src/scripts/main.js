'use strict';

const treeElement = document.querySelector('.tree');

function toggleHeaders(ulElement) {
  const liElements = [...ulElement.children];

  liElements.forEach((li) => {
    const childUl = li.querySelector('ul');

    if (childUl) {
      const headerText = li.firstChild.textContent;
      const span = document.createElement('span');

      span.textContent = headerText;

      li.firstChild.replaceWith(span);

      span.addEventListener('click', () => {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      });

      toggleHeaders(childUl);
    }
  });
}

toggleHeaders(treeElement);
