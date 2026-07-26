'use strict';

const parentList = document.querySelector('.tree');
const childLists = parentList.getElementsByTagName('ul');

function wrapHeadingWithSpan(list) {
  const oldHeading = list.previousSibling;
  const newHeading = document.createElement('span');

  newHeading.textContent = oldHeading.textContent;

  oldHeading.remove();

  list.before(newHeading);
}

function addCloseFeature(list) {
  const heading = list.previousElementSibling;

  heading.addEventListener('click', (e) => {
    if (list.style.display === 'none') {
      list.style.display = '';
    } else {
      list.style.display = 'none';
    }
  });
}

for (const item of childLists) {
  wrapHeadingWithSpan(item);
  addCloseFeature(item);
}
