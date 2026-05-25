'use strict';

// write code here
const tree = document.querySelector('.tree');

function replaceSpan(tr) {
  for (const child of tr.querySelectorAll('li')) {
    const ul = child.querySelectorAll(':scope > ul');

    if (!ul) {
      return;
    }

    const span = document.createElement('span');

    span.textContent = child.firstChild.textContent.trim();

    child.firstChild.remove();

    child.prepend(span);
  }
}

replaceSpan(tree);

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ul = e.target.parentElement.querySelector(':scope > ul');

  if (ul) {
    ul.hidden = !ul.hidden;
  }
});
