'use strict';

const tree = document.querySelector('.tree');
const allLi = document.querySelectorAll('li');

allLi.forEach(each => {
  if (each.firstElementChild) {
    each.firstChild.textContent = each.insertAdjacentHTML('afterbegin',
      `<span>${each.firstChild.textContent}</span>`);

    return each;
  }
});

tree.addEventListener('click', e => {
  if (e.target.nodeName === 'SPAN') {
    const hideLIst = e.target.parentElement;

    hideLIst.children[1].hidden = !hideLIst.children[1].hidden;
  }
});
