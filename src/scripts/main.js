'use strict';

const tree = document.querySelector('.tree');

function check(element) {
  return (element || tree.contains(element));
}

function hide(hideEvent) {
  const targetElement = hideEvent.target.firstElementChild;

  if (check(targetElement)) {
    if (targetElement.tagName === ('UL')) {
      if (targetElement.style.display !== 'none') {
        targetElement.style.display = 'none';

        return;
      };

      if (targetElement.style.display === 'none') {
        targetElement.style.display = 'block';
      }
    }
  }
}

function over(overEvent) {
  const targetElement = overEvent.target.firstElementChild;

  if (check(targetElement)) {
    if (targetElement.tagName === ('UL')) {
      overEvent.target.style.fontWeight = 'bold';
      targetElement.style.fontWeight = 'normal';
    }
  }
}

function out(outEvent) {
  const targetElement = outEvent.target.firstElementChild;

  if (check(targetElement)) {
    if (targetElement.tagName === ('UL')) {
      outEvent.target.style.fontWeight = 'normal';
    }
  }
}

tree.addEventListener('click', hide);
tree.addEventListener('mouseover', over);
tree.addEventListener('mouseout', out);
