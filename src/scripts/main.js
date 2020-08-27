'use strict';

for (const a of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  a.prepend(span);
  span.innerText = span.nextSibling.textContent;
  span.nextSibling.remove();
}

const block = document.querySelector('.tree');

block.style.position = 'absolute';
block.style.top = '50px';

block.addEventListener('click', (event) => {
  const ul = event.target;

  if (ul.nextElementSibling.tagName === 'UL') {
    ul.nextElementSibling.hidden = !ul.nextElementSibling.hidden;
  }
});
