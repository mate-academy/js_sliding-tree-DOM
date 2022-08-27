'use strict';

const liItems = document.querySelectorAll('li');
const liItemsArr = [...liItems];
const list = document.querySelector('.tree');

for (let i = 0; i < liItemsArr.length; i++) {
  if (liItemsArr[i].querySelector('ul')) {
    const span = document.createElement('SPAN');

    span.textContent = liItemsArr[i].firstChild.textContent;
    liItemsArr[i].prepend(span);
    liItemsArr[i].childNodes[1].remove();
  }
}

const switchDisplay = (e) => {
  if (e.srcElement.tagName === 'SPAN') {
    if (e.target.nextElementSibling.style.display === 'none') {
      e.target.nextElementSibling.style.display = 'block';
    } else {
      const childCollection = e.target.parentElement.children;
      const childArr = [...childCollection];

      childArr.find(x => x.tagName === 'UL').style.display = 'none';
    }
  }
};

list.addEventListener('click', switchDisplay);
