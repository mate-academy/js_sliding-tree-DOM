'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');
  const text = li.firstChild;

  if (!text || text.nodeType !== 3) {
    continue;
  }

  span.textContent = text.textContent;
  li.replaceChild(span, text);
}

tree.onclick = function (e) {
  const li = e.target.closest('li');

  if (!li) {
    return;
  }

  const ul = li.querySelector('ul');

  if (e.target.tagName !== 'SPAN') {
    return;
  }

  if (ul === null || ul === undefined) {
    return;
  }

  if (ul.style.display === 'none') {
    ul.style.display = '';
  } else {
    ul.style.display = 'none';
  }
};
