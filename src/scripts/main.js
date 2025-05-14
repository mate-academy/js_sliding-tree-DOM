'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  const subList = li.querySelector('ul');

  if (subList) {
    const nodeText = Array.from(li.childNodes).find(
      (node) => node.nodeType === 3 && node.textContent.trim() !== '',
    );

    if (nodeText) {
      const spanElement = document.createElement('span');

      spanElement.textContent = nodeText.textContent.trim();

      li.insertBefore(spanElement, nodeText);
      li.removeChild(nodeText);

      spanElement.addEventListener('click', () => {
        if (subList.style.display === 'none') {
          subList.style.display = 'block'
        } else {
          subList.style.display = 'none'
        }
      });
    }
  }
});
