'use strict';

const tree = document.querySelector('.tree');

const handleOnClick = (element) => {
  const ul = element.querySelector('ul');

  if (ul.style.display === 'none') {
    ul.style.display = 'block';
  } else {
    ul.style.display = 'none';
  }
};

const makeList = (element) => {
  if (!element) {
    return;
  }

  const arrayOfNodes = element.childNodes;

  arrayOfNodes.forEach((item) => {
    if (item.childNodes.length <= 1) {
      return;
    }

    if (item.nodeName === 'LI') {
      const span = document.createElement('span');

      span.textContent = item.firstChild.textContent.trim();
      span.addEventListener('click', () => handleOnClick(item));
      item.firstChild.replaceWith(span);

      const ul = item.querySelector('ul');

      makeList(ul);
    }
  });
};

makeList(tree);
