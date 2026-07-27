'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((li) => {
  const textNode = [...li.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  if (!textNode) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();

  li.replaceChild(span, textNode);
});

document.addEventListener('click', function (e) {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const li = span.closest('li');
  const nestedList = li.querySelector('ul');

  if (!nestedList) {
    return;
  }

  nestedList.hidden = !nestedList.hidden;
});
