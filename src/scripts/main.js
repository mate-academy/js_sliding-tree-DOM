'use strict';

const allUls = document.querySelectorAll('ul');
const listsWithChildren = [];

for (let i = 1; i < allUls.length; i++) {
  const parentLi = allUls[i].parentElement;
  const headerSpan = document.createElement('span');
  headerSpan.textContent = parentLi.firstChild.textContent;
  parentLi.insertBefore(headerSpan, allUls[i]);
  parentLi.removeChild(parentLi.firstChild);
  listsWithChildren.push(parentLi);
}

for (const list of listsWithChildren) {
  const header = list.querySelector('span');
  header.addEventListener('click', (e) => {
    e.stopPropagation();

    const children = [...list.children].filter(
      (child) => child.tagName === 'UL',
    );
    const isVisible = children.some((child) => child.style.display !== 'none');

    for (const child of children) {
      child.style.display = isVisible ? 'none' : 'block';
    }
  });
}
