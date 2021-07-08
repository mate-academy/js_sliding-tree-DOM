'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  if (item.children.length > 0) {
    const textInfo = item.childNodes[0];
    const restOfList = item.childNodes[1];
    const wraper = document.createElement('span');

    wraper.classList.add('heading');
    wraper.append(textInfo);

    item.innerHTML = '';
    item.append(wraper);
    item.append(restOfList);
  }
});

list.addEventListener('click', (e) => {
  const head = e.target.closest('.heading');

  if (!head || !list.contains(head)) {
    return;
  }

  head.nextSibling.hidden = !head.nextSibling.hidden;
});
