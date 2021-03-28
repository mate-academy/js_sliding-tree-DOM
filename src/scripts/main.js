'use strict';

const list = document.querySelector('.tree');
const listItems = list.querySelectorAll('li');

listItems.forEach(item => {
  if (item.firstChild.nextElementSibling) {
    const itemText = item.firstChild.textContent.trim();
    const textWrapper = document.createElement('span');

    textWrapper.classList.add('tree__text');
    textWrapper.textContent = itemText;
    item.firstChild.replaceWith(textWrapper);
  }
});

list.addEventListener('click', function(e) {
  const listTextWrapper = e.target.closest('.tree__text');

  if (listTextWrapper) {
    listTextWrapper.nextElementSibling.hidden
      = !listTextWrapper.nextElementSibling.hidden;
  }
});
