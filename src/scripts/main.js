'use strict';

const list = document.querySelectorAll('ul');

for (let a = 0; a < list.length; a++) {
  const span = document.createElement('span');

  span.textContent = list[a].previousSibling.textContent;
  list[a].previousSibling.replaceWith(span);

  span.onclick = () => {
    span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
  };
};
