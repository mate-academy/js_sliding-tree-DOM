'use strict';

// write code here
const list = document.querySelector('.tree');

wrapChildrenHeaders(list);

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const targetParent = e.target.parentNode;

    for (const sibling of targetParent.children) {
      if (sibling.tagName === 'UL') {
        sibling.style.display = sibling.style.display === 'none' ? '' : 'none';
      }
    }
  }
});

function wrapChildrenHeaders(element) {
  const childNodes = element.childNodes;

  for (const child of childNodes) {
    if (child.nodeType === 3) {
      const childTrimmedText = child.textContent.trim();

      if (childTrimmedText.length > 0) {
        const headerSpan = document.createElement('span');

        headerSpan.textContent = child.textContent;
        child.replaceWith(headerSpan);
      }
    } else {
      wrapChildrenHeaders(child);
    }
  }
}
