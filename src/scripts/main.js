'use strict';

const li = [...document.querySelectorAll('li')];
const tree = document.querySelector('.tree');

li.forEach(el => {
  const titleText = el.firstChild.textContent;
  const span = document.createElement('span');

  span.classList.add('title');
  span.innerText = titleText;
  el.replaceChild(span, el.firstChild);
});

tree.addEventListener('click', (e) => {
  const hideElement = e.target.nextElementSibling;

  if (!e.target.classList.contains('title') || !hideElement) {
    return;
  };

  hideElement.hidden = !hideElement.hidden;
});
