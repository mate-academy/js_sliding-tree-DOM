'use strict';

const allLiHeaders = document.querySelectorAll('li');

for (const header of allLiHeaders) {
  if (
    header.firstChild.textContent.length !==
    header.firstChild.textContent.trim().length
  ) {
    const textNode = header.firstChild;
    const newSpan = document.createElement('span');

    newSpan.appendChild(document.createTextNode(textNode.nodeValue));

    header.replaceChild(newSpan, textNode);
  }
}

const spans = document.querySelectorAll('span');

for (const span of spans) {
  span.addEventListener('click', () => {
    span.nextSibling.toggleAttribute('hidden');
  });
}
