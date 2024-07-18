'use strict';

const list = [...document.querySelectorAll('.tree li')];

function onClick(e) {
  const style = e.target.nextElementSibling.style;

  style.display = style.display === 'none' ? '' : 'none';
}

list.forEach((node) => {
  const txt = node.childNodes[0].textContent.trim();

  const childLi = node.querySelectorAll('li');

  if (childLi.length > 0) {
    node.childNodes[0].textContent = '';

    const span = document.createElement('span');

    span.textContent = txt;
    span.addEventListener('click', onClick);

    node.insertBefore(span, node.firstChild);
  }
});
