'use strict';

const tree = document.querySelector('.tree');

const headLines = [...tree.querySelectorAll('li')];

headLines
  .filter((li) => li.querySelector('ul'))
  .forEach((li) => {
    const span = document.createElement('span');
    const textNode = li.childNodes[0];

    span.textContent = textNode.textContent.trim();
    li.replaceChild(span, textNode);

    span.addEventListener('click', (ev) => {
      ev.stopPropagation();

      if (li.querySelector('ul').style.display === 'none') {
        li.querySelector('ul').style.display = 'block';
      } else {
        li.querySelector('ul').style.display = 'none';
      }
    });
  });
