'use strict';

const fullList = document.querySelector('.tree');
const arrLi = [...fullList.children]
  .map((li) => [...li.children[0].children])
  .flat();
const arrHeadlines = arrLi.map((li) => li.childNodes[0].wholeText.trim());

arrLi.forEach((li, idx) => {
  li.removeChild(li.firstChild);
  li.prepend(wrapHeadline(idx));
});

function wrapHeadline(i) {
  const span = document.createElement('span');

  span.innerHTML = arrHeadlines[i];

  return span;
}

fullList.addEventListener('click', (e) => {
  const value =
    e.target.tagName === 'SPAN' ? e.target.nextSibling.style.display : null;

  if (
    (e.target.tagName === 'SPAN' && !value) ||
    (e.target.tagName === 'SPAN' && value === 'block')
  ) {
    e.target.nextSibling.style.display = 'none';
  }

  if (e.target.tagName === 'SPAN' && value === 'none') {
    e.target.nextSibling.style.display = 'block';
  }
});
