document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.tree-header');

  headers.forEach((header) => {
    const span = document.createElement('span');

    span.textContent = header.textContent;
    header.textContent = '';
    header.appendChild(span);

    const treeChildren = header.nextElementSibling;

    treeChildren.style.display = 'none';

    span.addEventListener('click', function (customEvent) {
      if (treeChildren.style.display === 'none') {
        treeChildren.style.display = 'block';
      } else {
        treeChildren.style.display = 'none';
      }

      customEvent.stopPropagation();
    });
  });

  document.addEventListener('click', function () {
    const allChildren = document.querySelectorAll('.tree-children');

    allChildren.forEach((child) => {
      child.style.display = 'none';
    });
  });
});
