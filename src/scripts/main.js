'use strict';

const tree = document.querySelector('.tree');
const liAll = document.querySelectorAll('li');

liAll.forEach(li => {
  const span = document.createElement('span');

  span.innerText = li.firstChild.textContent;
  li.replaceChild(span, li.firstChild);
}
);

tree.addEventListener('click', e => {
  const targetList = e.target.parentNode.querySelector('ul');

  if (e.target.tagName !== 'SPAN' || !targetList) {
    return;
  }

  targetList.style.display = targetList.style.display === 'none'
    ? 'block' : 'none';
});
