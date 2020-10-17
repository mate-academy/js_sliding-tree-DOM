'use strict';

const mainTree = document.querySelector('.tree');
const lists = mainTree.querySelectorAll('ul');

lists.forEach(list => {
  const listHeader = list.previousSibling.data;

  list.previousSibling.remove();
  list.insertAdjacentHTML('beforebegin', `<span>${listHeader}</span>`);
});

mainTree.addEventListener('click', event => {
  const listHeader = event.target;
  const listBody = listHeader.nextSibling;

  if (listHeader.tagName === 'SPAN') {
    listBody.hidden = !listBody.hidden || false;
  }
});
