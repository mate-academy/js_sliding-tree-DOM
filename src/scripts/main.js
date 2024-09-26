'use strict';

const listItemElements = document.querySelectorAll('li');

listItemElements.forEach(item => {
  const newSpanElement = document.createElement('span');

  newSpanElement.textContent = item.firstChild.textContent;

  item.replaceChild(newSpanElement, item.firstChild);

  newSpanElement.addEventListener('click', () => {
    const sublist = item.querySelector('ul');

    if (sublist) {
      sublist.hidden = !sublist.hidden;
    }
  });
});
