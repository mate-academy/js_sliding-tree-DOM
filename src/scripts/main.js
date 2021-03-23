'use strict';

const elements = document.querySelectorAll('.tree ul');

elements.forEach(element => {
  const span = document.createElement('span');
  const listName = element.previousSibling.textContent;

  span.innerText = listName;
  element.previousSibling.replaceWith(span);

  span.onclick = () => {
    const nextSibling = span.nextElementSibling;

    if (nextSibling.style.display === 'none') {
      nextSibling.style.display = 'block';
    } else {
      nextSibling.style.display = 'none';
    }
  };
});
