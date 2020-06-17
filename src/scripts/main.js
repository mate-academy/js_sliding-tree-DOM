'use strict';

const generalTree = document.querySelector('.tree');

function hide(hideEvent) {
  const targetElement = hideEvent.target.firstElementChild;

  if (!targetElement || !generalTree.contains(targetElement)) {
    return;
  };

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

function over(overEvent) {
  const targetElement = overEvent.target.firstElementChild;

  if (!targetElement || !generalTree.contains(targetElement)) {
    return;
  }

  if (targetElement.tagName === ('UL')) {
    overEvent.target.style.fontWeight = 'bold';
    targetElement.style.fontWeight = 'normal';
  }
}

function out(outEvent) {
  const targetElement = outEvent.target.firstElementChild;

  if (!targetElement || !generalTree.contains(targetElement)) {
    return;
  }

  if (targetElement.tagName === ('UL')) {
    outEvent.target.style.fontWeight = 'normal';
  }
}

generalTree.addEventListener('click', hide);
generalTree.addEventListener('mouseover', over);
generalTree.addEventListener('mouseout', out);
