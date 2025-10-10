'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  const text = li.firstChild;

  if (text && text.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.classList.add('title');
    span.textContent = text.textContent.trim();
    li.insertBefore(span, text);
    li.removeChild(text);
  }
});

tree.addEventListener('click', (e) => {
  const title = e.target.closest('span.title');

  if (!title) {
    return;
  }

  const li = title.closest('li');

  if (!li) {
    return;
  }

  const childUls = li.querySelectorAll(':scope > ul');

  childUls.forEach((ul) => {
    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  });
});
