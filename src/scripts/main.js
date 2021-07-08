'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  if (item.children.length > 0) {
    const textInfo = item.childNodes[0];
    const restOfList = item.childNodes[1];
    const wrapper = document.createElement('span');

    wrapper.classList.add('heading');
    wrapper.append(textInfo);

    item.innerHTML = '';
    item.append(wrapper);
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
