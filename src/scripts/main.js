'use strict';

const tree = document.querySelector('.tree');
const subList = tree.querySelectorAll('ul');

subList.forEach(el => {
  const span = document.createElement('span');

  el.before(span);
  span.append(span.previousSibling);
  el.style.display = 'none';

  span.addEventListener('click', () => {
    el.style.display === 'none'
      ? el.style.display = 'block'
      : el.style.display = 'none';
  });
});
