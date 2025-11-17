'use strict';

// write code here
const lists = [...document.querySelectorAll('li')];

lists.filter((list) => {
  const children = list.childNodes;

  for (const child of children) {
    if (child.nodeName === 'UL') {
      child.style.display = 'none';

      const header = list.firstChild;
      const wrap = document.createElement('span');

      wrap.textContent = header.textContent;

      list.replaceChild(wrap, header);
    }
  }
});

const allSpan = document.querySelectorAll('span');

allSpan.forEach((el) => {
  el.addEventListener('click', (eve) => {
    const element = eve.target.parentElement.querySelector('ul');

    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});
