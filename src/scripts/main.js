'use strict';

document.querySelectorAll('li').forEach((li) => {
  const childUl = li.querySelector(':scope > ul');

  if (childUl) {
    const textNodes = Array.from(li.childNodes).filter(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
    );

    if (textNodes.length) {
      const span = document.createElement('span');

      span.textContent = textNodes[0].textContent.trim();

      li.insertBefore(span, childUl);
      textNodes[0].remove();
    }
  }
});

document.querySelectorAll('ul').forEach((ul) => {
  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const li = e.target.closest('li');

      if (li.querySelector(':scope > ul')) {
        li.classList.toggle('is-open');
      }
    }
  });
});
