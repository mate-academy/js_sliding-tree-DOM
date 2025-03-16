'use strict';

const listItems = document.querySelectorAll('.tree li');

listItems.forEach((li) => {
  const childNodes = Array.from(li.childNodes);

  childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.textContent.trim();
      node.replaceWith(span);
    }
  });
});

const spanElements = document.querySelectorAll('.tree li > span');

spanElements.forEach((span) => {
  span.addEventListener('click', toggleVisibility);
});

function toggleVisibility(e) {
  const li = e.target.closest('li');

  if (li) {
    const childUl = li.querySelector('ul');

    if (childUl) {
      childUl.style.display = childUl.style.display === 'none' ? '' : 'none';
    }
  }
}
