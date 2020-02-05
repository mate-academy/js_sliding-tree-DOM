'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach(item => {
  const node = item.firstChild;

  item.insertAdjacentHTML('afterBegin', `<span>${node.textContent}</span>`);
  item.removeChild(node);
});

function handler(event1) {
  if (event1.target.tagName !== 'SPAN') {
    return;
  }

  const innerUl = event1.target.parentElement.querySelector('ul');

  if (innerUl) {
    innerUl.hidden = !innerUl.hidden;
  }
}

tree.addEventListener('click', handler);
