'use strict';

// write code here
const tree = document.querySelector('.tree');
const headlines = document.querySelectorAll('li');

function wrapTextToSpan(element) {
  const children = [...element.children];

  for (const child of element.children) {
    child.remove();
  }

  const copyText = element.innerText.trim();
  const newSpan = document.createElement('span');

  element.textContent = '';
  newSpan.innerText = copyText;
  element.appendChild(newSpan);

  children.forEach((item) => element.appendChild(item));
}

for (const el of headlines) {
  if ([...el.children].length > 0) {
    wrapTextToSpan(el);
  }
}

tree.addEventListener(
  'click',
  (ev) => {
    if (ev.target.tagName === 'SPAN') {
      const hideList = ev.target.nextSibling;

      hideList.style.display =
        hideList.style.display !== 'none' ? 'none' : 'block';
    }
  },
  true,
);
