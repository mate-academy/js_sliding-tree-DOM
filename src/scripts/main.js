'use strict';

const tree = document.querySelector('.tree');
const listElements = tree.getElementsByTagName('li');

for (let i = 0; i < listElements.length; i++) {
  const listElement = listElements[i];
  const childList = listElement.querySelector('ul');

  if (childList) {
    let listElementTitle = listElement.firstChild;

    if (listElementTitle.nodeType === Node.TEXT_NODE) {
      const spanElement = document.createElement('span');

      spanElement.textContent = listElementTitle.textContent;
      listElement.replaceChild(spanElement, listElementTitle);
      listElementTitle = spanElement;

      listElementTitle.addEventListener('click', function() {
        childList.hidden = !childList.hidden;
      });
    }
  };
}
