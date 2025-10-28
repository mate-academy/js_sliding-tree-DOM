'use strict';

const items = document.querySelectorAll('li');

for (const li of items) {
  for (const node of Array.from(li.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      const span = document.createElement('span');

      span.textContent = node.textContent.trim();
      span.classList.add('title');

      li.replaceChild(span, node);
    }
  }
}

document.addEventListener('click', (e) => {
  if (!e.target.matches('.title')) {
    return;
  }

  const li = e.target.closest('li');
  const sub = li.querySelector(':scope > ul');

  sub.style.display = sub.style.display ? '' : 'none';
});
