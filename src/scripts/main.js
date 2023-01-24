'use strict';

const listItems = document.querySelectorAll('li');
const list = document.querySelector('.tree');

listItems.forEach(item => {
  if (item.children.length > 0) {
    item.insertAdjacentHTML('afterbegin', '<span></span>');
    item.children[0].appendChild(item.childNodes[1]);
  }
});

list.addEventListener('click', (e) => {
  const headerEl = e.target;

  if (headerEl.tagName !== 'SPAN') {
    return;
  }

  [...headerEl.nextElementSibling.children].forEach(li => {
    li.hidden = !li.hidden;

    // const isHidden = li.style.display === 'none';
    //
    // if (isHidden) {
    //   li.style.display = 'block';
    // } else {
    //   li.style.display = 'none';
    // }
  });
});
