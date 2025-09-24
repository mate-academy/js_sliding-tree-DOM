'use strict';

const list = document.querySelectorAll('li');
const lister = [...list];

lister.forEach((element) => {
  const l = element.childNodes;

  l.forEach((node) => {
    if (node.nodeType === 3) {
      const spaner = document.createElement('span');

      spaner.textContent = node.nodeValue;
      element.replaceChild(spaner, node);
    }
  });
});

const sp = document.querySelectorAll('span');

sp.forEach((item) => {
  item.addEventListener('click', () => {
    const parentLi = item.parentElement;

    const childUl = parentLi.querySelector('ul');

    if (childUl) {
      childUl.style.display =
        childUl.style.display === 'none' ? 'block' : 'none';
    }
  });
});
