'use strict';

const list = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  const span = document.createElement('span');

  if (item.children.length) {
    span.classList.add('tree__span');
    span.textContent = item.firstChild.textContent;
    item.firstChild.replaceWith(span);
  }
});

function visibilityToggler(e) {
  const toggledElement = e.target.closest('.tree__span');

  if (!toggledElement) {
    return;
  }

  toggledElement.nextElementSibling.hidden
    = !toggledElement.nextElementSibling.hidden;
};

list.addEventListener('click', visibilityToggler);
