'use strict';

// write code here

const table = document.querySelector('.tree');
const li = table.querySelectorAll('li');

for (const el of li) {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
}

table.onclick = (element) => {
  if (element.target.tagName !== 'SPAN') {
    return;
  }

  const container = element.target.parentNode.querySelector('ul');

  if (!container) {
    return;
  }
  container.hidden = !container.hidden;
};
