'use strict';

const li = document.querySelectorAll('li');

li.forEach((item) => {
  const span = document.createElement('span');

  item.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      span.textContent = node.textContent.trim();
      item.replaceChild(span, node);
    }
  });

  span.addEventListener('click', () => {
    if (span.nextElementSibling.style.display === 'none') {
      span.nextElementSibling.style.display = 'block';
    } else {
      span.nextElementSibling.style.display = 'none';
    }
  });
});
