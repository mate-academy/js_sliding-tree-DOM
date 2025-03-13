'use strict';

const tree = document.body.querySelector('.tree');
const childrens = tree.children;
const Ul01 = childrens[0].querySelector('ul');
const Ul02 = childrens[1].querySelector('ul');
const Urray = Array.from(Ul01.children).concat(Array.from(Ul02.children));

Urray.forEach((item) => {
  const content = item.firstChild.textContent.trim();
  const span = document.createElement('span');

  span.textContent = content;

  item.firstChild.textContent = '';
  item.prepend(span);

  span.addEventListener('click', () => {
    const workArray = Array.from(item.children).slice(1);

    workArray.forEach((i) => {
      if (i.style.display === 'none') {
        i.style.display = 'block';
      } else {
        i.style.display = 'none';
      }
    });
  });
});
