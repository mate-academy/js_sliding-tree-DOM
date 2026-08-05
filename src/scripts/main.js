'use strict';

const lis = document.querySelectorAll('li');

for (const li of lis) {
  const text = li.firstChild;

  if (text && text.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = text.textContent;

    li.replaceChild(span, text);
  }
}

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ul = e.target.parentElement.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
});
