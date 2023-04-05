'use strict';

const list = document.querySelector('.tree');
const headers = list.querySelectorAll('li');

for (const element of headers) {
  const header = element;
  const text = header.firstChild.textContent;
  const span = document.createElement('span');

  span.textContent = text;
  header.replaceChild(span, header.firstChild);
}

const spanElement = document.querySelectorAll('span');

spanElement.forEach(item => {
  const sibling = item.nextElementSibling;

  item.addEventListener('click', () => {
    sibling.hidden = !sibling.hidden;
  });
});
