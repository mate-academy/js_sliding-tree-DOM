'use strict';

const tree = document.querySelector('.tree');

addSpan(tree);

function addSpan(ul) {
  const li = ul.querySelectorAll('li');

  li.forEach((element) => {
    const textNodes = element.childNodes;

    textNodes.forEach((text) => {
      if (text.nodeType === 3) {
        const span = document.createElement('span');

        span.appendChild(text);
        element.prepend(span);
      }
    });
  });
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const li = e.target.parentElement;
    const ul = Array.from(li.children).find((child) => child.tagName === 'UL');

    if (ul) {
      if (ul.style.display === 'none') {
        ul.style.display = '';
      } else {
        ul.style.display = 'none';
      }
    }
  }
});
