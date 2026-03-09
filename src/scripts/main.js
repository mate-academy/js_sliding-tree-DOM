'use strict';

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  const textNode = li.firstChild;

  li.insertBefore(span, textNode);
  span.appendChild(textNode);
}

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.closest('li');
  const nestedUl = parentLi.querySelector('ul');

  if (!nestedUl) {
    return;
  }

  nestedUl.hidden = !nestedUl.hidden;
});
