'use strict';

const fullList = document.querySelector('.tree');
const mainArrLi = [...fullList.children].map((li) => li);
const subArrLi = [...fullList.children]
  .map((li) => [...li.children[0].children])
  .flat();

function getTitles(arr) {
  return arr.map((li) => li.childNodes[0].wholeText.trim());
}

const mainArrHeadlines = getTitles(mainArrLi);
const subArrHeadlines = getTitles(subArrLi);

function helper(arr, titles) {
  arr.forEach((li, idx) => {
    li.removeChild(li.firstChild);
    li.prepend(wrapHeadline(idx, titles));
  });
}

helper(mainArrLi, mainArrHeadlines);
helper(subArrLi, subArrHeadlines);

function wrapHeadline(i, titles) {
  const span = document.createElement('span');

  span.innerHTML = titles[i];

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
