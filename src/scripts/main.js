'use strict';

for (const element of document.querySelectorAll('li')) {
  const newSpan = document.createElement('span');

  element.prepend(newSpan);
  newSpan.innerText = newSpan.nextSibling.textContent;
  newSpan.nextSibling.remove();
}

const tree = document.querySelector('.tree');

tree.style.position = 'absolute';
tree.style.top = `${tree.getBoundingClientRect().top}px`;
tree.style.left = `${tree.getBoundingClientRect().left}px`;

tree.addEventListener('click', (event) => {
  const point = event.target;

  if (point.nextElementSibling.tagName === 'UL') {
    point.nextElementSibling.hidden = !point.nextElementSibling.hidden;
  }
});
