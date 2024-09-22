'use strict';

const branches = document.querySelectorAll('li');

branches.forEach((branch) => {
  const textNode = branch.firstChild;

  if (textNode.nodeType !== Node.TEXT_NODE) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  branch.replaceChild(span, textNode);

  span.addEventListener('click', () => {
    const nextBranch = branch.querySelector('ul');

    if (!nextBranch) {
      return;
    }

    nextBranch.style.display =
      nextBranch.style.display === 'none' ? 'block' : 'none';
  });
});
