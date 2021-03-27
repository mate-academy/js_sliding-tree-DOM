'use strict';

const elements = document.querySelectorAll('.tree ul');

elements.forEach(element => {
  const span = document.createElement('span');
  const listName = element.previousSibling.textContent;

  span.innerText = listName;
  element.previousSibling.replaceWith(span);

  span.onclick = () => {
    span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
  };
});
