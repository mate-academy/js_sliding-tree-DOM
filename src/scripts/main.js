'use strict';

const tree = document.querySelector('.tree');
const liItems = document.querySelectorAll('.tree li');

for (const li of liItems) {
  const firstCh = li.firstChild;

  if (firstCh.nodeType === 3 && firstCh.textContent.trim() !== '') {
    const span = document.createElement('span');
    const text = firstCh.textContent;

    li.insertBefore(span, firstCh);
    span.textContent = text;
    li.removeChild(firstCh);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');
  const ulChild = li.querySelector(':scope > ul');

  if (!ulChild) {
    return;
  }

  ulChild.hidden = !ulChild.hidden;
});
