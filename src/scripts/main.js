'use strict';

function listShowToggle() {
  const tree = document.querySelector('.tree');

  for (const li of tree.querySelectorAll('li')) {
    const childUl = li.querySelector('ul');

    if (childUl) {
      const firstNode = li.childNodes[0];

      // Check if first node is a non-empty text node
      if (
        firstNode?.nodeType === Node.TEXT_NODE &&
        firstNode.textContent.trim() !== ''
      ) {
        const span = document.createElement('span');

        span.textContent = firstNode.textContent.trim();

        li.insertBefore(span, firstNode);
        li.removeChild(firstNode);

        span.style.cursor = 'pointer';

        span.addEventListener('click', () => {
          childUl.hidden = !childUl.hidden;
        });
      }
    }
  }
}

listShowToggle();
