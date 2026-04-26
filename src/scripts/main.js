'use strict';

const items = document.querySelectorAll('li');

items.forEach((item) => {
  const childList = item.querySelector('ul');

  if (childList) {
    const textNode = item.firstChild;
    const text = textNode.textContent.trim();

    if (!text) {
      return;
    }

    const span = document.createElement('span');

    span.textContent = text;
    item.replaceChild(span, textNode);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const li = e.target.parentNode;
    const ul = li.querySelector('ul');

    if (ul.style.display === 'none') {
      ul.style.display = 'block';
    } else {
      ul.style.display = 'none';
    }
  }
});
