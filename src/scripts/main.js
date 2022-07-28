'use strict';

const tree = document.querySelector('.tree');

for (const header of tree.children) {
  header.innerHTML = `
    <span>
      ${header.childNodes[0].data}
    </span>
  ` + `
    <ul>
      ${header.firstElementChild.innerHTML}
    </ul>`;

  const nextLayer = header.children[1];

  for (const child of nextLayer.children) {
    child.innerHTML = `
    <span>
      ${child.childNodes[0].data}
    </span>
  ` + `
    <ul>
      ${child.firstElementChild.innerHTML}
    </ul>`;
  }
}

tree.addEventListener('click', (e) => {
  const target = e.target.closest('span');

  if (!target) {
    return;
  }

  const headerContent = target.parentNode.querySelector('ul');

  headerContent.hidden = !headerContent.hidden;
});
