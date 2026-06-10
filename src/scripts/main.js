'use strict';

const wrapHeadlineText = (treeRoot) => {
  const items = Array.from(treeRoot.querySelectorAll('li'));

  items.forEach((item) => {
    const textNode = Array.from(item.childNodes).find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
    );

    if (!textNode) {
      return;
    }

    const headlineText = textNode.textContent.trim();

    if (!headlineText) {
      return;
    }

    const span = document.createElement('span');

    span.textContent = headlineText;

    textNode.textContent = textNode.textContent.replace(headlineText, '');
    item.insertBefore(span, item.firstChild);
  });
};

const toggleSubtree = (span) => {
  const item = span.parentElement;

  if (!item) {
    return;
  }

  const subtree = Array.from(item.children).find(
    (child) => child.tagName === 'UL',
  );

  if (!subtree) {
    return;
  }

  subtree.hidden = !subtree.hidden;
};

window.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  wrapHeadlineText(tree);

  tree.addEventListener('click', (clickEvent) => {
    const headlineSpan = clickEvent.target.closest('span');

    if (!headlineSpan || !tree.contains(headlineSpan)) {
      return;
    }

    toggleSubtree(headlineSpan);
  });
});
