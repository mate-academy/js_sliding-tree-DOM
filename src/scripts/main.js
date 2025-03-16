'use strict';

const tree = document.querySelector('.tree');

function wrapIntoSpan(node) {
  const textNodes = Array.from(node.childNodes).filter(
    (child) => child.nodeType === node.TEXT_NODE,
  );

  textNodes.forEach((textNode) => {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();
    node.insertBefore(span, textNode);
    node.removeChild(textNode);
  });
}

tree.querySelectorAll('li').forEach((li) => {
  wrapIntoSpan(li);
});

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const li = e.target.parentElement;
    const subUl = li.querySelector('ul');

    if (subUl) {
      subUl.hidden = !subUl.hidden;
    }
  }
});
