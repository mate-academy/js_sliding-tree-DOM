'use strict';

document.querySelectorAll('li').forEach((li) => {
  const childUl = li.querySelector('ul');

  if (childUl) {
    const text = li.firstChild.textContent.trim();

    if (text) {
      const span = document.createElement('span');

      span.textContent = text;

      li.insertBefore(span, childUl);
      li.firstChild.remove();
    }
  }
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.tree')) {
    return;
  }

  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const next = span.nextElementSibling;

  if (next && next.tagName === 'UL') {
    if (next.style.display === 'none') {
      span.nextElementSibling.style.display = '';
    } else {
      span.nextElementSibling.style.display = 'none';
    }
  }
});
