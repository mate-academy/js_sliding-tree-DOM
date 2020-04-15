'use strict';

const tree = document.querySelector('.tree');

function sublistHider(ev) {
  if (ev.target.tagName === 'SPAN') {
    ev.target
      .parentElement
      .children[1].hidden = !ev.target.parentElement.children[1].hidden;
  }
}

const lies = tree.querySelectorAll('li');

for (const item of lies) {
  const a = item.childNodes[0];

  item.insertAdjacentHTML(
    'afterbegin',
    `<span>${item.childNodes[0].data}</span>`
  );
  a.data = '';
}

tree.addEventListener('click', sublistHider);
