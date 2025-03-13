document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tree li').forEach((li) => {
    const hasNestedList = li.querySelector('ul');

    if (hasNestedList) {
      const span = document.createElement('span');

      span.classList.add('tree-title');
      span.textContent = li.firstChild.textContent.trim();
      li.firstChild.textContent = '';
      li.prepend(span);

      hasNestedList.style.display = 'none';

      span.addEventListener('click', function (even) {
        even.stopPropagation();

        if (hasNestedList.style.display === 'none') {
          hasNestedList.style.display = 'block';
        } else {
          hasNestedList.style.display = 'none';
        }
      });
    }
  });
});
