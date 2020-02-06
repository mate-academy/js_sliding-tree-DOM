'use strict';

const tree = document.body.querySelector('.tree');

function showAndHide(e) {
  if (e.target.children.length) {
    const elem = [...e.target.children][0];

    !elem.hidden ? elem.hidden = true : elem.hidden = false;
  }
}

tree.addEventListener('click', showAndHide);

function boldText(e) {
  const { target } = e;

  if (target.tagName === 'LI' && target.children.length) {
    target.classList.add('boldText');

    for (const elem of [...target.children]) {
      elem.classList.add('normalText');
    }
  }
}

tree.addEventListener('mouseover', boldText);

function normalText(e) {
  const { target } = e;

  if (target.tagName === 'LI' && target.children.length) {
    target.classList.remove('boldText');
  }
}

tree.addEventListener('mouseout', normalText);
