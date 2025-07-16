'use strict';
// write code here

document.querySelectorAll('ul.tree li').forEach((li) => {
  const childUl = li.querySelector('ul');

  if (childUl) {
    const text = li.firstChild;

    if (text.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');

      span.textContent = text.textContent.trim();
      li.insertBefore(span, text);
      li.removeChild(text);
    }

    childUl.style.display = 'none';
  }
});

document.querySelectorAll('ul.tree span').forEach((span) => {
  span.style.cursor = 'pointer';

  span.addEventListener('click', (e) => {
    const nextUl = span.nextElementSibling;

    if (nextUl && nextUl.tagName.toLowerCase() === 'ul') {
      nextUl.style.display = nextUl.style.display === 'none' ? 'block' : 'none';
    }

    e.stopPropagation(); // Prevent event bubbling if needed
  });
});
