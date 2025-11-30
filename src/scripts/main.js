'use strict';

// write code here
const items = document.querySelectorAll('li:has(ul)');

items.forEach((li) => {
  const firstTextNode = [...li.childNodes].find(
    (n) => n.nodeType === 3 && n.textContent.trim(),
  );
   if (!firstTextNode) {
    return;
  }
  const span = document.createElement('span');

  span.textContent = firstTextNode.textContent;
  li.replaceChild(span, firstTextNode);
});

const spans = document.querySelectorAll('span');

spans.forEach((span) => {
  span.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    const nestedUl = li.querySelector(':scope > ul');

    if (!nestedUl) {
      return;
    }

    nestedUl.style.display =
      nestedUl.style.display === 'none' ? 'block' : 'none';
  });
});
