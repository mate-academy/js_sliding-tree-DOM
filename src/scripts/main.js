'use strict';

const mainList = document.querySelector('.tree');
const allLi = document.querySelectorAll('li');

for (const someLi of allLi) {
  const span = document.createElement('span');

  someLi.prepend(span);
  span.append(span.nextSibling);
}

mainList.addEventListener('click', (e) => {
  const allUl = document.querySelectorAll('ul');

  for (const someUl of allUl) {
    if (someUl === e.target) {
      return;
    }
  }

  const parentLiTitle = e.target;  
  const liUnderTitle = parentLiTitle.nextSibling;
  
  liUnderTitle.hidden = (!liUnderTitle.hidden)? true: false;
});