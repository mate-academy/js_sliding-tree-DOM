'use strict';

// write code here
const list = document.querySelector('.tree');

const items = list.querySelectorAll('li:has(ul)');

items.forEach((t) => {
  const wrapper = document.createElement('span');
  const title = t.firstChild.textContent.trim();

  wrapper.textContent = title;

  t.firstChild.replaceWith(wrapper);
});

const span = document.querySelectorAll('span');

span.forEach((s) => {
  const ul = s.nextElementSibling;

  ul.style.display = 'none';

  s.addEventListener('click', () => {
    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  });
});
