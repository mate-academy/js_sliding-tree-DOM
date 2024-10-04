const tree = document.querySelector('.tree');
const li = tree.querySelectorAll('li');

for (const item of li) {
  const firstChild = item.firstChild;
  const span = document.createElement('span');

  span.append(item.firstChild.textContent.trim());
  firstChild.replaceWith(span);
}

tree.addEventListener('click', (e) => {
  const nextSibling = e.target.nextElementSibling;

  nextSibling.style.display =
    nextSibling.style.display === 'none' ? 'block' : 'none';
});
