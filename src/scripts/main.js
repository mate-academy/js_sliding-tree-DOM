'use strict';

const li = document.querySelectorAll('li');

li.forEach((item) => {
  const ul = item.querySelector('ul');

  if (ul) {
    for (const nod of item.childNodes) {
      if (nod.nodeType === Node.TEXT_NODE && nod.textContent.trim()) {
        const span = document.createElement('span');

        span.textContent = nod.textContent.trim();

        item.insertBefore(span, nod);
        nod.textContent = '';
      }
    }
  }
});

const spanAll = document.querySelectorAll('span');

spanAll.forEach((sp) => {
  sp.addEventListener('click', (e) => {
    const parentSpan = e.target.parentElement;
    const ulInside = parentSpan.querySelector('ul');

    if (ulInside.style.display === 'none') {
      ulInside.style.display = '';
    } else {
      ulInside.style.display = 'none';
    }
  });
});
