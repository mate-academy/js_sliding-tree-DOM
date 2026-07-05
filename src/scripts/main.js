'use strict';

const tree = document.querySelector('.tree');
const treeItems = [...tree.querySelectorAll('li')];

treeItems.forEach(item => {
  let headerTextNode = null;
  for(const node of item.childNodes) {
    if(node.nodeType === Node.TEXT_NODE) {
      headerTextNode = node;
      break;
    }
  }
  if(headerTextNode) {
    const span = document.createElement('span');
    span.textContent = headerTextNode.textContent;
    item.replaceChild(span, headerTextNode);
  }
});

const spans = tree.querySelectorAll('span'); 
const states = new Array(spans.length).fill(true);

spans.forEach((item, index) => {
  item.addEventListener('click', () => {
    const next = item.nextElementSibling;
    if(next === null) return;
    states[index] = !states[index];
    next.style.display = states[index] ? 'block' : 'none';
  });
})