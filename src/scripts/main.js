'use strict';

const tree = document.querySelector('.tree');

document.querySelectorAll('li').forEach((li) => {
  const firstTextNode = Array.from(li.childNodes).find(
    (node) => node.nodeType === 3,
  );

  if (firstTextNode) {
    const span = document.createElement('span');

    span.textContent = firstTextNode.textContent.trim();

    li.insertBefore(span, firstTextNode);

    firstTextNode.remove();
  }
});

tree.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.parentElement.querySelector('ul');

  if (target === null) {
    return;
  }

  if (target.style.display === 'none') {
    target.style.display = '';
  } else {
    target.style.display = 'none';
  }
});
