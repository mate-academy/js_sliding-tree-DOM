'use strict';

const focusElement = document.querySelectorAll('li ul');

focusElement.forEach(element => {
  const span = document.createElement('span');

  span.innerHTML = element.previousSibling.textContent.trim();
  element.previousSibling.replaceWith(span);

  span.onclick = () => {
    span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
  };
});
