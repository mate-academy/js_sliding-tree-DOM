'use strict';

const li = document.querySelectorAll('li');

li.forEach((elem) => {
  const children = Array.from(elem.childNodes);

  for (let i = 0; i < children.length; i++) {
    const node = children[i];

    if (node.nodeType === 1 && node.tagName === 'UL') {
      const nodesBeforeUl = children.slice(0, i);

      const span = document.createElement('span');

      nodesBeforeUl.forEach((n) => span.appendChild(n));

      span.addEventListener('click', () => {
        if (node.style.display === 'none') {
          node.style.display = '';
        } else {
          node.style.display = 'none';
        }
      });

      elem.insertBefore(span, node);
      break;
    }
  }
});
