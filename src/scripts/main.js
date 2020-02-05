'use strict';

const tree = document.body.querySelector('.tree');

function showAndHide(e) {
  if (e.target.children.length) {
    [...e.target.children][0].classList.toggle('HideShow');
  }
}

tree.addEventListener('click', showAndHide);

function boldText(e) {
  if (e.target.tagName === 'LI' && e.target.children.length) {
    e.target.classList.add('boldText');

    for (const elem of [...e.target.children]) {
      elem.classList.add('normalText');
    }
  }
}

tree.addEventListener('mouseover', boldText);

function normalText(e) {
  if (e.target.tagName === 'LI' && e.target.children.length) {
    e.target.classList.remove('boldText');
  }
}

tree.addEventListener('mouseout', normalText);
