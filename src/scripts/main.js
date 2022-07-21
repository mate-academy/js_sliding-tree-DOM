'use strict';

const allLi = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const element of allLi) {
  if (element.children.length) {
    const spanElement = document.createElement('span');

    spanElement.innerText = element.childNodes[0].textContent.trim();
    spanElement.style.userSelect = 'none';
    // header of each list
    element.childNodes[0].remove();
    element.prepend(spanElement);
    // deleting the original text node and replacing it with the span node
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.nodeName === 'SPAN') {
    const childUl = e.target.nextElementSibling;

    if (childUl.style.display === '') {
      childUl.style.display = 'none';
    } else {
      childUl.style.display = '';
    }
  }
});
