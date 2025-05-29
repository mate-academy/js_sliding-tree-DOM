'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();

  li.insertBefore(span, li.firstChild);
  li.firstChild.nextSibling.remove();
});

document.querySelectorAll('.tree span').forEach((span) => {
  const nextUl = span.nextElementSibling;

  span.addEventListener('click', () => {
    if (nextUl.style.display === 'none') {
      nextUl.style.display = 'block';
    } else {
      nextUl.style.display = 'none';
    }
  });
});
