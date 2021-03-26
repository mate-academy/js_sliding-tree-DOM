'use strict';

// write code here
const tree = document.querySelectorAll('.tree ul');

for (const item of tree) {
  const span = document.createElement('span');

  span.textContent = item.previousSibling.textContent;
  item.previousSibling.replaceWith(span);

  span.onclick = () => {
    span.nextSibling.hidden = !span.nextSibling.hidden;
  };
}
