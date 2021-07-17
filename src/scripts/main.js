'use strict';

const tree = document.querySelector('.tree');
const listItmes = tree.querySelectorAll('li');

for (const item of listItmes) {
  const span = document.createElement('span');

  span.innerText = item.firstChild.textContent;
  item.replaceChild(span, item.firstChild);
}

tree.addEventListener('click', () => {
  if (event.target.tagName === 'SPAN') {
    const ul = event.target.parentNode.querySelector('ul');

    if (ul) {
      if (ul.style.display !== 'none') {
        ul.style.display = 'none';
      } else {
        ul.style.display = 'block';
      }
    }
  }
});
