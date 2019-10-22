'use strict';
const treeHeaders = document.querySelector('.tree');

treeHeaders.addEventListener('click', (action) => {
  if (action.target.tagName !== 'SPAN') {
    return;
  }
  const innerInfo = action.target.parentNode.childNodes[2];
  if (!innerInfo) {
    alert('SORRY NO ITEMS MORE!');
  }
  innerInfo.hidden = !innerInfo.hidden;
});
// const span = document.createElement('span');
// const li = document.getElementsByTagName('li');
// for (const text of li) {
//   text.prepend(span);
//   console.log(text.textContent);
// } не получилось ;(
