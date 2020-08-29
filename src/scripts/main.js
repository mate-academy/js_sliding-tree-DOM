'use strict';

const tree = document.querySelectorAll('li');

for (const item of tree) {
  const span = document.createElement('span');

  item.prepend(span);

  span.textContent = span.nextSibling.textContent;
  span.nextSibling.remove();
}

const list = document.querySelector('.tree');

list.style.position = 'absolute';
list.style.top = 20 + '%';
list.style.left = 40 + '%';

list.addEventListener('click', (event) => {
  const element = event.target;

  if (element.nextElementSibling.tagName === 'UL') {
    element.nextElementSibling.hidden = !element.nextElementSibling.hidden;
  }
});
