'use strict';

const generallTree = document.querySelector('.tree');

const liElement = [...document.querySelectorAll('li')];

for (let i = 0; i < liElement.length; i++) {
  const spanElement = document.createElement('span');

  if (liElement[i].children.length > 0) {
    spanElement.innerText = liElement[i].firstChild.nodeValue;
    liElement[i].prepend(spanElement);
    liElement[i].childNodes[1].remove();
  }
}

const closeTree = (clickHandler) => {
  if (clickHandler.target.tagName === 'SPAN') {
    clickHandler.target.nextSibling.hidden = !clickHandler
      .target.nextSibling.hidden;
  };
};

generallTree.addEventListener('click', closeTree);
