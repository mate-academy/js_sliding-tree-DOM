'use strict';

function wrapListHeaders() {
  const listItems = document.querySelectorAll('li');

  listItems.forEach((li) => {
    let headerTextNode = null;

    for (const node of li.childNodes) {
      if (node.nodeType === 3 && node.textContent.trim().length > 0) {
        headerTextNode = node;
        break;
      }
    }

    if (headerTextNode) {
      const span = document.createElement('span');

      span.textContent = headerTextNode.textContent;
      span.style.cursor = 'pointer';

      li.replaceChild(span, headerTextNode);
    }
  });
}

wrapListHeaders();

const allNestedLists = document.querySelectorAll('li ul');

allNestedLists.forEach((ul) => {
  ul.hidden = true;
});

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.closest('li');

  if (!parentLi) {
    return;
  }

  const childUl = Array.from(parentLi.children).find(
    (el) => el.tagName === 'UL',
  );

  if (!childUl) {
    return;
  }

  childUl.hidden = !childUl.hidden;
});
