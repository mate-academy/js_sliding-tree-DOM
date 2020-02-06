'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach(item => {
  const node = item.firstChild;

  item.insertAdjacentHTML('afterBegin', `<span>${node.textContent}</span>`);
  item.removeChild(node);
});

function handler(e) {
  const { target: { tagName, parentElement } } = e;

  if (tagName !== 'SPAN') {
    return;
  }

  const innerUl = parentElement.querySelector('ul');

  if (innerUl) {
    innerUl.hidden = !innerUl.hidden;
  }
}

tree.addEventListener('click', handler);
