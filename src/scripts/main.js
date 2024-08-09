'use strict';

const tree = document.querySelector('.tree');
const titles = document.querySelectorAll('li');

titles.forEach((element) => {
  if (element.children.length === 0) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = element.firstChild.nodeValue.trim();
  span.style.cursor = 'pointer';

  element.prepend(span);

  if (span.nextSibling) {
    span.nextSibling.remove();
  }
});

tree.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.tagName === 'SPAN') {
    const childList = clickEvent.target.nextSibling;

    if (childList && childList.tagName === 'UL') {
      childList.hidden = !childList.hidden;
    }
  }
});
