'use strict';

const list = document.querySelectorAll('li');

list.forEach((item) => {
  const span = document.createElement('span');

  span.innerText = item.firstChild.textContent.trim();
  item.replaceChild(span, item.firstChild);
});

document.addEventListener('click', e => {
  if (e.target.tagName === 'SPAN') {
    const hide = e.target.parentNode.querySelector('ul');

    if (hide) {
      hide.style.display = (hide.style.display === 'none') ? '' : 'none';
    }
  }
});
