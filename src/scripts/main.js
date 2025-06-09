'use strict';

// write code here

const listItems = document.querySelectorAll('.tree li');

listItems.forEach((item) => {
  const childList = Array.from(item.childNodes).find(
    (node) => node.nodeType === 1 && node.tagName === 'UL',
  );

  if (childList) {
    const textNode = Array.from(item.childNodes).find(
      (node) => node.nodeType === 3 && node.textContent.trim().length,
    );

    if (textNode) {
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();

      item.insertBefore(span, textNode);
      item.removeChild(textNode);

      childList.style.display = 'none';

      span.addEventListener('click', (e) => {
        childList.style.display =
          childList.style.display === 'none' ? '' : 'none';
        e.stopPropagation();
      });
    }
  }
});
