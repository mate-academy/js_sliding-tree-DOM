'use strict';

document.querySelectorAll('li').forEach((li) => {
  const textNodes = Array.from(li.childNodes).filter(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  textNodes.forEach((textNode) => {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();
    textNode.textContent = '';
    li.replaceChild(span, textNode);
  });
});

document.querySelectorAll('li > span').forEach((span) => {
  span.style.cursor = 'pointer';

  span.addEventListener('click', () => {
    const childUl = span.parentElement.querySelector('ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  });
});
