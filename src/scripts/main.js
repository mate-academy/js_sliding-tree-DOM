'use strict';

const listOfLi = document.querySelectorAll('.tree li');

for (const li of listOfLi) {
  if (li.firstElementChild && li.firstElementChild.tagName === 'UL') {
    const nestedUl = li.firstElementChild;

    let directText = '';

    for (const node of li.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        directText += node.textContent;
      }
    }

    const savedUl = li.removeChild(nestedUl);

    li.textContent = '';

    const span = document.createElement('span');

    span.textContent = directText.trim();
    li.appendChild(span);

    li.appendChild(savedUl);

    span.addEventListener('click', () => {
      if (savedUl.style.display === 'none') {
        savedUl.style.display = '';
      } else {
        savedUl.style.display = 'none';
      }
    });
  }
}
