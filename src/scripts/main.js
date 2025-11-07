'use strict';

const list = document.querySelector('.tree');
const listItems = list.querySelectorAll('li');

for (const item of listItems) {
  if (item.querySelector('ul')) {
    for (const childNode of item.childNodes) {
      if (childNode.nodeType === 3) {
        const span = document.createElement('span');

        span.textContent = childNode.textContent.trim();
        item.replaceChild(span, childNode);
        break;
      }
    }
  }
}

list.addEventListener('click', function (e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentTarget = e.target.closest('li');
  const childTarget = parentTarget.querySelector('ul');

  if (!childTarget) {
    return;
  }

  if (childTarget.style.display === '') {
    childTarget.style.display = 'none';
  } else {
    childTarget.style.display = '';
  }
});
