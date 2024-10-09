'use strict';

// write code here
const tree = document.querySelector('.tree')
const treeElements = document.querySelectorAll('.tree li')

treeElements.forEach((element) => {
  const title = element.firstChild.nodeValue.trim();
  const innerList = element.querySelector('ul');

  if (innerList) {
    const newTitle = document.createElement('span');

    newTitle.innerText = title;
    element.firstChild.replaceWith(newTitle)
  }
})

tree.addEventListener('click', (e) =>{
  const toggleTitle = e.target.closest('span');

  if (!toggleTitle) {
    return ;
  }
  
  const nextElement = toggleTitle.nextElementSibling;

  if (nextElement.style.display === 'none') {
    nextElement.style.display = 'block';
    toggleTitle.style.fontWeight = '400'
  } else {
    nextElement.style.display = 'none';
    toggleTitle.style.fontWeight = 'bold'
  }

})
