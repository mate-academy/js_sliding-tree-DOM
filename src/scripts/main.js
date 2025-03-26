'use strict';

const li = document.querySelectorAll('.tree li');

li.forEach((el) => {
  if (el.textContent) {
    const spanEl = document.createElement('span');
    const text = el.firstChild;

    spanEl.textContent = el.firstChild.textContent;
    el.firstChild.textContent = '';

    el.firstChild.parentNode.insertBefore(spanEl, text);
    el.style.display = 'block';
  }
});

addEventListener('click', (e) => {
  const clickOn = e.target;

  if (clickOn.tagName !== 'SPAN') {
    return;
  }

  const ul = clickOn.parentNode.querySelector('ul');

  if (ul) {
    ul.hidden = !ul.hidden;
  }
});
