'use strict';

const list = document.querySelector('.tree');
const liCollection = [...document.querySelectorAll('li')];

for (const item of liCollection) {
  if (item.children.length > 0) {
    const spanLi = document.createElement('span');

    spanLi.innerText = item.firstChild.nodeValue;
    item.prepend(spanLi);
    item.childNodes[1].remove();
  }
}

const expandTree = (e) => {
  const item = e.target.closest('span');

  if (!item || !list.contains(item)) {
    return;
  }

  const subList = e.target.nextElementSibling;

  if (subList.style.display === 'none') {
    subList.style.display = 'block';
  } else {
    subList.style.display = 'none';
  }
};

list.addEventListener('click', expandTree);
