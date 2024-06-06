'use strict';

const tree = document.querySelector('.tree');

const li = tree.querySelectorAll('li');

li.forEach((item) => {
  if (item.querySelector('li')) {
    const spanElem = document.createElement('span');
    const changed = item.childNodes[0].textContent.trim();

    spanElem.textContent = changed;

    item.removeChild(item.childNodes[0]);
    item.insertBefore(spanElem, item.childNodes[0]);
  }
});

tree.addEventListener('click', (e) => {
  const item = e.target.closest('li');

  if (e.target.tagName !== 'SPAN') {
    return;
  }

  if (item.lastElementChild.tagName === 'UL') {
    const list = item.querySelector('ul');

    if (list.style.display === 'none') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  }
});
