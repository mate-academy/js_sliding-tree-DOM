'use strict';

document.querySelectorAll('li').forEach(item => {
  if (item.children.length) {
    const title = item.childNodes[0].textContent;

    item.childNodes[0].textContent = '';
    item.insertAdjacentHTML('afterbegin', `<span>${title}</span>`);
  }
});

const list = document.querySelector('.tree');

list.addEventListener('click', (e) => {
  const item = e.target;

  if (item.tagName !== 'SPAN') {
    return;
  }

  item.closest('li').querySelector('ul').hidden
    = !item.closest('li').querySelector('ul').hidden;
});
