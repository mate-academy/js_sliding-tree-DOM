'use strict';

for (const item of document.querySelectorAll('li')) {
  if (!item.children.length) {
    continue;
  }

  const span = document.createElement('span');

  span.innerText = item.childNodes[0].textContent.trim();
  item.childNodes[0].remove();
  item.prepend(span);
}

document.querySelector('.tree').addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const list = e.target.nextElementSibling;

  if (!list.style.display) {
    list.style.display = 'none';
  } else {
    list.style.display = '';
  }
});
