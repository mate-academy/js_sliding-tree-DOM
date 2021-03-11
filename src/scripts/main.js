'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  const span = document.createElement('span');

  if (item.children.length) {
    span.textContent = item.firstChild.textContent;
    item.firstChild.replaceWith(span);
  }
});

function visibilityToggler(e) {
  const toggledElement = e.target.closest('li').querySelector('ul');

  toggledElement.hidden = !toggledElement.hidden;
};

list.addEventListener('click', visibilityToggler);
