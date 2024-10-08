'use strict';

const tree = document.querySelectorAll('.tree li');

tree.forEach((item) => {
  const span = document.createElement('span');
  const text = item.firstChild;

  span.textContent = text.textContent.trim();
  item.replaceChild(span, text);

  span.addEventListener('click', (e) => {
    e.preventDefault();

    const list = item.querySelector('ul');

    if (list) {
      if (list.style.display === 'none') {
        list.style.display = 'block';
      } else {
        list.style.display = 'none';
      }
    }
  });
});
