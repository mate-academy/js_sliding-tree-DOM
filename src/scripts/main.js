'use strict';

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  span.textContent = li.childNodes[0].textContent.trim();
  li.childNodes[0].textContent = '';
  li.prepend(span);
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', function (e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childContainer = e.target.parentNode.querySelector('ul');

  if (!childContainer) {
    return;
  }

  childContainer.hidden = !childContainer.hidden;
});
