'use strict';

const ulEl = document.querySelector('ul.tree');

const allLi = [...ulEl.querySelectorAll('li')];
const headersLi = allLi.filter((li) => li.querySelector('ul'));

headersLi.forEach((li) => {
  const nestedUl = li.querySelector('ul');

  const textNode = [...li.childNodes].find(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  textNode.replaceWith(span);

  span.addEventListener('click', () => {
    nestedUl.toggleAttribute('hidden');
  });
});
