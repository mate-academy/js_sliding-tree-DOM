'use strict';

// write code here
const mainlist = document.querySelector('.tree');
const strCollection = mainlist.innerHTML
  .trim()
  .split('\n')
  .map(item => item.trim());

/* Create <span></span> tag around header list */
function addSpanToHeader(stringCollection) {
  const arrNewCollection = [];

  for (let i = 0; i < stringCollection.length; i++) {
    let currentElem = stringCollection[i];
    const nextElem = stringCollection[i + 1];

    if (nextElem === '<ul>') {
      let headerLi = currentElem
        .replace('<li>', '<li><span class="header-list">');

      headerLi += '</span>';
      currentElem = headerLi;
    }

    arrNewCollection.push(currentElem);
  }

  const collectionWithSpan = arrNewCollection.join('');

  mainlist.innerHTML = collectionWithSpan;
};

addSpanToHeader(strCollection);

mainlist.addEventListener('click', (e) => {
  const item = e.target.closest('.header-list');

  if (!item) {
    return;
  }

  const itemParent = item.parentElement;
  const currentListOfItem = itemParent.querySelector('ul');

  if (currentListOfItem.style.display === 'none') {
    currentListOfItem.style.display = 'block';
  } else {
    currentListOfItem.style.display = 'none';
  }
});
