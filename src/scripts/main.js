'use strict';

// write code here
document.querySelectorAll('.tree li').forEach((li) => {
  const childUl = li.querySelector('ul');

  if (childUl) {
    const textNodes = Array.from(li.childNodes).filter(
      (node) =>
        node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
    );

    textNodes.forEach((textNode) => {
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();
      textNode.replaceWith(span);
    });
  }
});

document.addEventListener('click', function (e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');
  const childList = li.querySelector('ul');

  if (childList) {
    childList.hidden = !childList.hidden;
  }
});
