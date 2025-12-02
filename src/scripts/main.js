'use strict';

// write code here
const li = document.querySelectorAll('li');

for (const node of li) {
  const textNode = Array.from(node.childNodes).find(
    (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim(),
  );

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();
    node.replaceChild(span, textNode);
  }
}

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const span = e.target;
  const newLi = span.closest('li');

  const children = Array.from(newLi.children).find((el) => el.tagName === 'UL');

  if (!children) {
    return;
  }

  if (children.style.display === 'none') {
    children.style.display = 'block';
  } else {
    children.style.display = 'none';
  }
});
