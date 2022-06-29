'use strict';

const tree = document.querySelector('.tree');

const links = document.querySelectorAll('li');
links.forEach(link => {
  let wrap = document.createElement("span");
  link.insertBefore(wrap, link.firstChild);
  wrap.appendChild(link.childNodes[1]);
});

tree.addEventListener('click', e => {
    const clickTarget = e.target;

    if (clickTarget.matches('span')) {
        const currLi = clickTarget.closest('li');
        const forHide = currLi.querySelector('ul');
        if (forHide.style.display === 'none') {
            forHide.style.display = 'block';
        } else {
        forHide.style.display = 'none';
        }
    }

})
