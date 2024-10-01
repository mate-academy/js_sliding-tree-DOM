'use strict';

// const firstCase = document.querySelectorAll('.tree > li')
const tree = document.querySelector('.tree');
const titleList = document.querySelectorAll('.tree > li, .tree > li > ul > li');

titleList.forEach((li) => {
  const title = li.firstChild.nodeValue.trim();
  const span = document.createElement('span');

  span.textContent = title;
  span.style.cursor = 'pointer';

  li.prepend(span);

  if (span.nextSibling) {
    span.nextSibling.remove();
  }
});

const onListClick = (e) => {
  if (e.target.tagName === 'SPAN') {
    const subList = e.target.nextSibling;

    if (subList && subList.tagName === 'UL') {
      subList.hidden = !subList.hidden;
    }
  }
};

tree.addEventListener('click', onListClick);

// firstCase.forEach(li => {
//   const title = li.childNodes[0].nodeValue.trim();
//   console.log(title);

//   const span = document.createElement('span');
//   span.textContent = title;

//   li.prepend(span, title);
//   const second = span.nextSibling;
//   const third = second.nextSibling;
//   third.remove();
//   second.remove();
// });
