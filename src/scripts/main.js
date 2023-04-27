'use strict';

const tree = document.querySelector('.tree');
const liGroup = tree.querySelectorAll('LI');

liGroup.forEach(el => {
  const span = document.createElement('SPAN');

  span.innerText = el.firstChild.nodeValue;
  el.firstChild.remove();
  el.prepend(span);
});

tree.addEventListener('click', e => {
  const list = e.target.closest('LI');
  const childList = list.children[1];

  if (childList) {
    if (childList.style.display === 'none') {
      childList.style.display = 'block';
    } else {
      childList.style.display = 'none';
    }
  }
});
