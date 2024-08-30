'use strict';

const li = document.querySelectorAll('li');

li.forEach((el) => {
  if (el.querySelector('ul')) {
    el.classList.add('has-child');

    const childUl = el.querySelector('ul');

    childUl.style.display = 'block';

    const textNode = el.firstChild;
    const span = document.createElement('span');

    span.style.cursor = 'pointer';
    span.textContent = textNode.textContent.trim();

    el.insertBefore(span, textNode);
    el.removeChild(textNode);

    span.addEventListener('click', (e) => {
      e.stopPropagation();

      if (childUl.style.display === 'block') {
        childUl.style.display = 'none';
      } else {
        childUl.style.display = 'block';
      }
    });
  }
});
