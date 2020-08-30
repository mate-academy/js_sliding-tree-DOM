'use strict';

const tree = document.querySelector('.tree');

tree.style.position = 'absolute';
tree.style.top = `${tree.getBoundingClientRect().top}px`;
tree.style.left = `${tree.getBoundingClientRect().left}px`;

function hideList() {
  function spanWrapper(selector) {
    [...document.querySelectorAll(selector)].forEach(elem => {
      if (elem.parentElement.nodeName === 'LI') {
        const parentLi = elem.parentElement;
        const parentLiText = parentLi.firstChild.textContent;

        parentLi.firstChild.textContent = '';

        parentLi.insertAdjacentHTML('afterbegin', `
        <span>${parentLiText}</span>`);
      }
    });
  }

  spanWrapper('ul');

  document.querySelector('.tree').addEventListener('click', (event) => {
    if (event.target.nextElementSibling.nodeName === 'UL') {
      event.target.nextElementSibling.hidden
      = !event.target.nextElementSibling.hidden;
    }
  });
}

hideList();
