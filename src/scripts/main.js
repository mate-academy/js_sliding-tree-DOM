'use strict';

for (const element of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  element.prepend(span);
  span.innerText = span.nextSibling.textContent;
  span.nextSibling.remove();
}

const tree = document.querySelector('.tree');

tree.style.position = 'absolute';
tree.style.top = '50px';
tree.style.left = '40%';

tree.addEventListener('click', (event) => {
  const point = event.target;

  if (point.nextElementSibling.tagName === 'UL') {
    point.nextElementSibling.hidden = !point.nextElementSibling.hidden;
  }
});
