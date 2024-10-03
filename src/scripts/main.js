'use strict';

// write code here
const tree = document.querySelector('.tree');
const headlines = document.querySelectorAll('li');

headlines.forEach((item, ind, arr) => {
  const text = item.firstChild.textContent.trim();
  const span = document.createElement('span');

  item.firstChild.remove();
  item.prepend(span);
  span.innerText = text;
});

tree.addEventListener('click', toogleList);

function toogleList(e) {
  const targetTag = e.target.tagName;
  const targetSib = e.target.nextSibling;

  if (targetTag === 'SPAN' && targetSib) {
    if (targetSib.style.display !== 'none') {
      targetSib.style.display = 'none';
    } else {
      targetSib.style.display = 'block';
    }
  }
}
