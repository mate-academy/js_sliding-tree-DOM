'use strict';

// write code here
const list = document.querySelector('.tree');

for (const li of list.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

list.onclick = (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childContainer = e.target.parentNode.querySelector('ul');

  if (!childContainer) {
    return;
  }

  childContainer.hidden = !childContainer.hidden;
};
