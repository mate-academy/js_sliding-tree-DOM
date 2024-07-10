'use strict';

const liNodes = document.querySelectorAll('li');

for (let i = 0; i < liNodes.length; i++) {
  const tempSpan = document.createElement('span');

  tempSpan.appendChild(liNodes[i].firstChild);
  liNodes[i].insertAdjacentElement('afterbegin', tempSpan);
}

document.querySelector('.tree').addEventListener('click', (e) => {
  const child = e.target.parentElement.querySelector('ul');

  if (e.target.tagName === 'SPAN') {
    if (child.style.display === '') {
      child.style.setProperty('display', 'none');
    } else {
      child.style.setProperty('display', '');
    }
  }
});
