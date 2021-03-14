'use strict';

const list = document.querySelectorAll('li');

class Span {
  constructor(item) {
    const newSpan = document.createElement('span');

    newSpan.innerText = item.textContent;
    newSpan.className = '.tree__span';

    return newSpan;
  }
}

for (const item of list) {
  if (item.children.length === 0) {
    continue;
  }

  const newElement = new Span(item.firstChild);

  item.firstChild.replaceWith(newElement);
}

function hideElement(element) {
  const nearestElement = element.target.nextSibling;

  if (!nearestElement) {
    return;
  }

  nearestElement.hidden = !nearestElement.hidden;
}

document.addEventListener('click', hideElement);
