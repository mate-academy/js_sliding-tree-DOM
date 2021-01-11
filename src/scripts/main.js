'use strict';

const tree = document.querySelector('.tree');
const coords = tree.getBoundingClientRect();

tree.style.cssText = `
  position: absolute;
  top: ${coords.top}px;
  left: ${coords.left}px;
`;

wrapInSpan(tree);

tree.addEventListener('click', (event) => {
  const ul = event.target.closest('li').lastElementChild;

  ul.hidden = !ul.hidden;
});

function wrapInSpan(list) {

  for (const item of list.children) {
    const text = item.firstChild.textContent.trim();
    const innerList = item.firstElementChild.outerHTML;

    item.innerHTML = `
      <span>${text}</span>
      ${innerList}
      `;

    if (item.lastElementChild.nodeName === 'UL'
      && item.lastElementChild.childElementCount < 3) {
      wrapInSpan(item.lastElementChild);
    }
  }
}
