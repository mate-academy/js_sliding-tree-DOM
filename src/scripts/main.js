'use strict';

[...document.querySelectorAll('li')].forEach((li) => {
  const span = document.createElement('span');

  span.prepend(li.firstChild);
  li.prepend(span);
});

[...document.querySelectorAll('ul')].forEach(el => {
  el.addEventListener('click', (event) => {
    event.stopPropagation();

    const targetNode = event.target;

    if (targetNode.tagName.toLowerCase() === 'span'
    && targetNode.parentNode.querySelector('ul')) {
      const ul = targetNode.parentNode.childNodes[1];

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
