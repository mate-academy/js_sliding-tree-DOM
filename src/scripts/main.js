document.addEventListener('DOMContentLoaded', () => {
  initializeTree();
});

function initializeTree() {
  const treeItems = document.querySelectorAll('ul > li');

  treeItems.forEach((item) => {
    const childUl = item.querySelector('ul');

    if (childUl) {
      const headerSpan = document.createElement('span');

      headerSpan.textContent = item.childNodes[0].textContent.trim();

      item.childNodes[0].remove();

      item.insertBefore(headerSpan, childUl);

      headerSpan.classList.add('tree-header');

      headerSpan.addEventListener('click', handleHeaderClicks);
    }
  });
}

function handleHeaderClicks(e) {
  const header = e.target;
  const childUl = header.nextElementSibling;

  if (childUl) {
    if (childUl.style.display === 'none') {
      childUl.style.display = 'block';
    } else {
      childUl.style.display = 'none';
    }
  }
}
