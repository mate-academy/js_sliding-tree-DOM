'use strict';

const list = document.querySelectorAll('li');

list.forEach(item => {
  item.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');
      span.textContent = node.textContent;
      item.replaceChild(span, node);
    }
  });

  const title = item.querySelector('span');

  if (title) {
    title.addEventListener('click', () => {
      const ul = item.querySelector('ul');

      if (ul) {
        if (item.querySelector('ul').style.display) {
          item.querySelector('ul').style.display = ''
        } else {
          item.querySelector('ul').style.display = 'none'
        }
      }
    });
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('tree-title')) {
    event.stopPropagation();
  }
});
