'use strict';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tree-title span').forEach((span) => {
    span.addEventListener('click', function (e) {
      const p = this.parentElement;
      const children = p.nextElementSibling;

      if (children && children.classList.contains('tree-children')) {
        children.classList.toggle('hidden');
      }

      e.stopPropagation();
    });
  });
});
