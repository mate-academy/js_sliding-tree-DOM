'use strict';

const caption = [...document.getElementsByTagName('li')].filter((item) => {
  return item.firstElementChild
    && item.firstElementChild.tagName === 'UL';
});

caption.forEach((item) => {
  const elementSpan = document.createElement('span');

  elementSpan.textContent = item.firstChild.nodeValue;
  item.firstChild.nodeValue = '';
  item.prepend(elementSpan);
});

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const collection = e.target.nextElementSibling.getElementsByTagName('li');

    for (const item of collection) {
      item.hidden ? item.hidden = '' : item.hidden = 'true';
    }
  }
});
