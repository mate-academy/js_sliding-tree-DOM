'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const tree = document.querySelector('.tree');

  if (!tree) {
    // eslint-disable-next-line no-console
    console.error('Tree element not found');

    return;
  }

  // Hide ONLY nested lists, keeping first-level branches visible
  tree.querySelectorAll('li > ul').forEach((ul) => (ul.style.display = 'none'));

  tree.addEventListener('click', function (e) {
    const target = e.target;

    if (target.tagName === 'LI') {
      const childUls = target.querySelectorAll(':scope > ul');

      childUls.forEach((ul) => {
        ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
      });
    }
  });
});
