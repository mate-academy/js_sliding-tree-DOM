'use strict';

const tree = document.querySelector('.tree');

for (const element of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  span.innerText = element.childNodes[0].textContent.trim();

  element.childNodes[0].textContent = '';
  element.prepend(span);
}

tree.addEventListener('click', (e) => {
  if (!e.target.closest('span')) {
    return;
  }

  const ulList = e.target.parentElement.querySelector('ul');

  if (ulList) {
    if (ulList.style.display === 'none') {
      ulList.style.display = 'block';

      return;
    }

    ulList.style.display = 'none';
  }
});
