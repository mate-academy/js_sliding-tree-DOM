'use strict';

const listItems = document.querySelectorAll('.tree li');

listItems.forEach(item => {
  const span = document.createElement('span');

  span.textContent = item.childNodes[0].nodeValue.trim();
  item.childNodes[0].nodeValue = '';
  item.insertBefore(span, item.childNodes[0]);

  item.addEventListener('click', e => {
    e.stopPropagation();

    const childList = item.querySelector('ul');

    if (childList) {
      childList.style.display = childList.style.display
        === 'none' ? 'block' : 'none';
    }
  });
});
