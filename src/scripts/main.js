'use strict';

const list = document.querySelectorAll('li');

list.forEach((li) => {
  const text = Array.from(li.childNodes).find((node) => node.nodeType === 3);
  if (!text) {
    return;
  }
  const span = document.createElement('span');

  span.textContent = text.textContent.trim();
  li.insertBefore(span, text);
  li.removeChild(text);
});

const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {

  if (e.target.tagName !== 'SPAN')
    {
       return;
    }

  const li = e.target.parentElement;
  const childUl = li.querySelector(':scope > ul');

  if (!childUl) {
    return;
  }

  childUl.style.display = childUl.style.display === 'none' ? 'block' : 'none';
});

