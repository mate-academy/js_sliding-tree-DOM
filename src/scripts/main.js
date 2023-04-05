'use strict';

const tree = document.querySelector('.tree');
const headers = tree.querySelectorAll('li');

for (let i = 0; i < headers.length; i++) {
  const header = headers[i];
  const text = header.firstChild.textContent;
  const span = document.createElement('span');

  span.textContent = text;
  header.replaceChild(span, header.firstChild);
}

const spanElement = document.querySelectorAll('span');

spanElement.forEach(item => {
  const list = item.nextElementSibling;

  item.addEventListener('click', () => {
    if (list.style.display === 'none') {
      list.style.display = '';
    } else {
      list.style.display = 'none';
    }
  });
});
