const getHeaderLi = document.querySelectorAll('li');

getHeaderLi.forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();
  li.firstChild.replaceWith(span);

  span.addEventListener('click', () => {
    const ul = li.querySelector('ul');

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  });
});
