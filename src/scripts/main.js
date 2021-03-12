'use strict';

const tree = document.querySelector('.tree');

const liElements = [...document.querySelectorAll('li')];

for (let i = 0; i < liElements.length; i++) {
  const spanElement = document.createElement('span');

  if (liElements[i].children.length > 0) {
    spanElement.innerText = liElements[i].firstChild.nodeValue;
    liElements[i].prepend(spanElement);
    liElements[i].childNodes[1].remove();
  }
}

const closeTree = (clickHandler) => {
  if (clickHandler.target.closest('span')) {
    clickHandler.target.nextSibling.hidden = !clickHandler
      .target.nextSibling.hidden;
  };
};

tree.addEventListener('click', closeTree);
