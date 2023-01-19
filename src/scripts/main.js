'use strict';

function AddSpanToUl(root) {
  const ul = root.querySelectorAll('li');

  for (const li of ul) {
    const data = li.textContent;
    const span = document.createElement('span');

    li.textContent = '';
    span.textContent = data;
    // li.innerHTML = `<span>${data}</span>`;
    li.append(span);

    if (li.querySelector('ul') === 'null') {
      break;
    }

    AddSpanToUl(li.querySelector('ul'));
  }
}

const tree = document.querySelector('.tree');

// AddSpanToUl(tree);
AddSpanToUl('tree');

tree.addEventListener('click', e => {
  if (!e.target.matches('li')) {
    return;
  }

  const ul = e.target.querySelector('ul');

  if (ul.style.display === 'none') {
    ul.style.display = 'list-item';
  } else {
    ul.style.display = 'none';
  }
});
