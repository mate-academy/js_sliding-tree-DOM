'use strict';

const li = document.querySelectorAll('li');

li.forEach((e) => {
  const textNode = e.firstChild;

  if (!textNode || textNode.nodeType !== Node.TEXT_NODE) return;

  const span = document.createElement('span');
  span.textContent = textNode.textContent;

  e.replaceChild(span, textNode);

  span.addEventListener('click', () => {
    const nested = e.querySelector('ul');

    if (nested) {
      nested.hidden = !nested.hidden;
    }
  });
});