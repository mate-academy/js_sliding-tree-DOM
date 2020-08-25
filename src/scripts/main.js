'use strict';

const list = [...document.querySelectorAll('li')];

for (let i = list.length - 1; i >= 0; i--) {
  list[i].innerHTML = `<span>${list[i].innerHTML}</span>`;
}

[...document.querySelectorAll('ul')].forEach(el => {
  el.addEventListener('click', (event) => {
    event.stopPropagation();

    const targetNode = event.target;

    if (targetNode.tagName.toLowerCase() === 'span'
      && targetNode.querySelector('ul')) {
      const ul = targetNode.childNodes[1];

      ul.style.transformOrigin = 'top';
      ul.style.transition = '0.5s';
      ul.style.overflow = 'hidden';

      if ((ul.style.transform === 'scaleY(0)')) {
        ul.style.transform = 'none';
        ul.style.maxHeight = '';
      } else {
        ul.style.transform = 'scaleY(0)';
        ul.style.maxHeight = '0';
      }
    }
  });
});
