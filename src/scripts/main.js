'use strict';

const lists = document.querySelectorAll('ul');
let show = true;

for (let i = 0; i < lists.length; i++) {
  const span = document.createElement('span');

  span.textContent = lists[i].previousSibling.textContent;
  lists[i].previousSibling.replaceWith(span);

  span.addEventListener('click', () => {
    show
      ? span.nextElementSibling.style.display = 'none'
      : span.nextElementSibling.style.display = 'block';
    show = !show;
  });
}
