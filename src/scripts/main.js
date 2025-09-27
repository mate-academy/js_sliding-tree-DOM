'use strict';

const init = () => {
  const list = document.querySelectorAll('li');
  const lister = [...list];

  lister.forEach((element) => {
    const l = Array.from(element.childNodes);

    l.forEach((node) => {
      if (
        node.nodeType === 3 &&
        node.nodeValue &&
        node.nodeValue.trim().length > 0
      ) {
        const spaner = document.createElement('span');

        spaner.textContent = node.nodeValue;
        spaner.classList.add('title');
        element.replaceChild(spaner, node);
      }
    });
  });

  const sp = document.querySelectorAll('.title');

  sp.forEach((item) => {
    item.addEventListener('click', () => {
      const parentLi = item.parentElement;

      const childUl = parentLi.querySelector(':scope > ul');

      if (childUl) {
        const currentDisplay = window.getComputedStyle(childUl).display;

        if (currentDisplay === 'none') {
          childUl.style.display = '';
        } else {
          childUl.style.display = 'none';
        }
      }
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
