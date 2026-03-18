'use strict';

const isElement = (node) => node && node.nodeType === Node.ELEMENT_NODE;

const hasTag = (node, tag) => {
  return (
    node &&
    node.nodeType === Node.ELEMENT_NODE &&
    node.tagName.toLowerCase() === tag
  );
};

const isTextNode = (node) =>
  node && node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '';

const getHeaderTextNode = (parentEl, breakTag) => {
  if (!isElement(parentEl) || !breakTag) {
    return null;
  }

  const tag = `${breakTag}`.toLowerCase();

  for (const node of parentEl.childNodes) {
    const isBreakNode = hasTag(node, tag);

    if (isBreakNode) {
      break;
    }

    if (isTextNode(node)) {
      return node;
    }
  }

  return null;
};

const getItemsWithChildren = (rootSelector, childSelector) => {
  const arr = [...document.querySelectorAll(rootSelector)];

  return arr.filter((el) => el.querySelector(childSelector));
};

const wrapTextNode = (parentEl, textNode, tagName) => {
  const el = document.createElement(tagName);

  parentEl.insertBefore(el, textNode);
  el.appendChild(textNode);
};

const toggleTreeItem = (e, titleSelector, itemSelector, childrenSelector) => {
  const clickedEl = e.target.closest(titleSelector);

  if (!clickedEl) {
    return false;
  }

  const parentEl = clickedEl.closest(itemSelector);

  if (!parentEl) {
    return false;
  }

  const childEl = parentEl.querySelector(childrenSelector);

  if (!childEl) {
    return false;
  }

  childEl.style.display = childEl.style.display === 'none' ? '' : 'none';

  return true;
};

(() => {
  const treeEl = document.querySelector('.tree');

  const li = getItemsWithChildren('.tree li', 'ul');

  li.forEach((el) => {
    const textNode = getHeaderTextNode(el, 'ul');

    if (textNode == null) {
      return;
    }

    wrapTextNode(el, textNode, 'span');
  });

  if (!treeEl) {
    return;
  }

  treeEl.addEventListener('click', (e) => {
    toggleTreeItem(e, 'span', 'li', 'ul');
  });
})();
