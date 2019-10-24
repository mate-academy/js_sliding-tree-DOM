'use strict';
const liList = document.querySelectorAll('.tree li');
for (const li of liList) {
  const span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}

document.querySelector('.tree').addEventListener('click', () => {
  if (event.target.tagName === 'SPAN') {
    const childrenContainer = event.target.parentNode.querySelector('ul');
    if (childrenContainer) {
      childrenContainer.hidden = !childrenContainer.hidden;
    }
  }
});
