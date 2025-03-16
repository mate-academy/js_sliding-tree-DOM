'use strict';

const fullList = document.querySelector('.tree');
const arrOfLi = [...fullList.querySelectorAll('li')].filter((li) => {
  return li.childNodes.length === 3;
});

function getTitles(arr) {
  return arr.map((li) => li.childNodes[0].wholeText.trim());
}

const arrOfHeadlines = getTitles(arrOfLi);

function helper(arr, titles) {
  arr.forEach((li, idx) => {
    li.removeChild(li.firstChild);
    li.prepend(wrapHeadline(idx, titles));
  });
}

helper(arrOfLi, arrOfHeadlines);

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
