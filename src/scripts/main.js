'use strict';

const lists = document.querySelectorAll('.tree ul');

lists.forEach(element => {
  const span = document.createElement('span');

  span.innerText = element.previousSibling.textContent;
  element.previousSibling.replaceWith(span);

  const nextElement = span.nextElementSibling;

  span.onclick = () => {
    nextElement.hidden = !nextElement.hidden;
  };
});
