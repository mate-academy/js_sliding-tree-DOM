'use strict';

const tree = document.querySelector('.tree');
const headers = [...tree.querySelectorAll('ul')];

for (const h of headers) {
  const wrapper = document.createElement('span');

  wrapper.append([...h.parentNode.childNodes][0].textContent);
  [...h.parentNode.childNodes][0].textContent = '';
  h.parentNode.prepend(wrapper);
}

tree.addEventListener('click', (e) => {
  const item = e.target.parentNode;
  const children = item.querySelectorAll('ul');

  if (!item.tagName === 'SPAN' || children.length === 0) {
    return;
  }

  const dispState = getComputedStyle(children[0]).display;

  if (dispState === 'block') {
    children[0].style.display = 'none';
  }

  if (dispState === 'none') {
    children[0].style.display = 'block';
  }
});
