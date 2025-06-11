'use strict';

const tree = document.querySelector('.tree');

const uls = tree.querySelectorAll('ul');

uls.forEach((ul) => {
  const spanEl = document.createElement('span');
  spanEl.classList.add('wrapper'); 

  ul.parentNode.insertBefore(spanEl, ul);
  spanEl.appendChild(ul);
});

document.querySelectorAll('li').forEach((li) => {
  const textNode = Array.from(li.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();

    li.insertBefore(span, textNode);
    li.removeChild(textNode);

    span.addEventListener('click', (e) => {
      const wrapperSpan = li.querySelector('.wrapper');

      if (wrapperSpan) {
        if (wrapperSpan.hasAttribute('hidden')) {
          wrapperSpan.removeAttribute('hidden');
        } else {
          wrapperSpan.setAttribute('hidden', '');
        }
      }
    });
  }
});
