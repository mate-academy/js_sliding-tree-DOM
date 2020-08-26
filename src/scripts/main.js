'use strict';

const tree = document.querySelector('.tree');
const listElements = tree.querySelectorAll('li');

for (const li of listElements) {
  const span = document.createElement('span');

  li.prepend(span);
  span.textContent = span.nextSibling.textContent.trim();
  span.nextSibling.remove();
}

tree.addEventListener('click', event => {
  const sibling = event.target.nextElementSibling;

  if (sibling) {
    if (sibling.tagName === 'UL' && sibling.hidden === false) {
      sibling.hidden = true;
    } else
    if (sibling.tagName === 'UL' && sibling.hidden === true) {
      sibling.hidden = false;
    }
  }
});
