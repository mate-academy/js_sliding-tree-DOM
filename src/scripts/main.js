'use strict';

document.querySelectorAll('li').forEach((li) => {
  if (li.querySelector('ul')) {
    const nodes = Array.from(li.childNodes);
    const textNode = nodes.find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
    );

    if (textNode) {
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();
      li.insertBefore(span, textNode);
      li.removeChild(textNode);
    }
  }
});

document.addEventListener('click', (e) => {
  const title = e.target.closest('span');

  if (!title) {
    return;
  }

  const subList = title.nextElementSibling;

  if (!subList || subList.tagName !== 'UL') {
    return;
  }

  subList.style.display = subList.style.display === 'none' ? 'block' : 'none';
});
