'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');
const unList = tree.querySelectorAll('ul');

for (const li of list) {
  if (li.children.length > 0) {
    const liTitle = li.firstChild.data.trim();
    const span = document.createElement('span');

    span.innerText = liTitle;
    li.firstChild.remove();
    li.prepend(span);
  }
};

for (const ul of unList) {
  ul.style.maxHeight = ul.offsetHeight + 'px';
  ul.style.overflow = 'hidden';
  ul.style.transition = 'max-height 0.5s';
}

function slideList(e) {
  const targetUnList = e.target.nextElementSibling;
  const currentHeight = targetUnList.offsetHeight;

  if (currentHeight === 0) {
    targetUnList.style.maxHeight = `270px`;
  } else {
    targetUnList.style.maxHeight = 0;

    for (const item of targetUnList.querySelectorAll('ul')) {
      item.style.maxHeight = 0;
    }
  }
};

tree.addEventListener('click', slideList);
