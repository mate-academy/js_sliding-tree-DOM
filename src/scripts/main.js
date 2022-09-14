'use strict';

const liList = [...document.querySelectorAll('li')];

function spanWrapper(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].childElementCount >= 1) {
      const header = document.createElement('span');
      const text = arr[i].childNodes[0].textContent.trim();

      arr[i].childNodes[0].remove();

      header.append(text);
      header.className = 'headLi';

      arr[i].prepend(header);
    }
  }
}

spanWrapper(liList);

const tree = document.querySelector('.tree');

tree.addEventListener('click', () => {
  if (event.target.className === 'headLi') {
    if (event.target.dataset.hide === 'true') {
      event.target.nextSibling.style.display = 'block';
      event.target.dataset.hide = false;
    } else {
      event.target.nextSibling.style.display = 'none';
      event.target.dataset.hide = true;
    }
  }
});
