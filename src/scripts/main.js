'use strict';

const tree = document.querySelector('.tree');
const lis = tree.querySelectorAll('li');

for (const li of lis) {
  for (const node of li.childNodes) {
    if (node.nodeType === 3 && node.textContent.trim() !== '') {
      const span = document.createElement('span');

      node.after(span);
      span.append(node);
    }
  }
}

tree.addEventListener('click', function (e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const closestLi = e.target.closest('li');
  const uls = closestLi.querySelector('ul');

  if (!uls) {
    return;
  }

  uls.hidden = !uls.hidden;
});
