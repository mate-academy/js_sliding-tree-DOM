'use strict';

const list = document.querySelectorAll('li');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childContainer = e.target.parentNode.querySelector('ul');

  if (!childContainer) {
    return;
  }

  childContainer.hidden = !childContainer.hidden;
});
