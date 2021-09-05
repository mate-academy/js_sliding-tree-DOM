'use strict';

const list = [...document.querySelectorAll('li')];

list.forEach(element => {
  const nodes = [...element.childNodes];

  nodes.forEach(item => {
    if (item.tagName === 'UL') {
      const span = document.createElement('span');
      element.prepend(span);
      span.append(span.nextSibling)
    }
  });

  document.addEventListener('click', event => {
    if (event.target.tagName === 'SPAN') {
      const node = [...event.target.parentNode.childNodes];
      for (let i = 0; i < node.length; i++) {
        if (node[i].tagName === 'UL' && node[i].hidden === false) {
          node[i].hidden = true;
        } else {
          node[i].hidden = false;
        }
      }
    } else {
      return;
    }
  })
});
