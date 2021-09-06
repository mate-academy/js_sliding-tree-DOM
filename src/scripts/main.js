'use strict';

const list = [...document.querySelectorAll('li')];

list.forEach(element => {
  const nodes = [...element.childNodes];

  nodes.forEach(item => {
    if (item.tagName === 'UL') {
      const span = document.createElement('span');

      element.prepend(span);
      span.append(span.nextSibling);
    }
  });

  document.addEventListener('click', e => {
    if (e.target.tagName === 'SPAN' && e.target.nextSibling.hidden === false) {
      e.target.nextSibling.hidden = true;
    } else {
      e.target.nextSibling.hidden = false;
    }
  });
});
