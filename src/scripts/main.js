'use strict';

const tree = document.querySelector('ul.tree');
const elements = [...tree.querySelectorAll('li')].filter((el) => {
  return el.contains(el.querySelector('ul'));
});

for (const el of elements) {
  const span = document.createElement('span');

  span.append(el.firstChild);
  el.prepend(span);
}

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const spanContent = e.target.nextElementSibling;

    if (spanContent.style.display === 'none') {
      spanContent.style.display = '';
    } else {
      spanContent.style.display = 'none';
    }
  }
});
