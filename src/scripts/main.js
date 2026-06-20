'use strict';

function wrapHeaderText() {
  const list = document.querySelectorAll('li');
  // находим все li

  // проходимся по каждому li
  list.forEach((li) => {
    // переменная для результата
    let text = null;

    // проходим по всем дочерним узлам
    // могут быть текстовые узлы, вложенные ul, span
    for (const node of li.childNodes) {
      // проверка на текстовый узел
      // и текст не пустой (пробелы, переносы строк не считаются)
      if (node.nodeType === 3 && node.textContent.trim().length > 0) {
        // если нашли, сохраняем
        text = node;

        // выходим из цикла и искать дальше не нужно
        break;
      }
    }

    // если нашли текстовый узел
    if (text) {
      // создаем span
      const span = document.createElement('span');

      // ложим текст, который был в текстовом узле
      span.textContent = text.textContent;

      // меняем старый текстовый узел на новый
      // внутри li (первый аргумент - новый, второй - старый)
      li.replaceChild(span, text);
    }
  });
}

// вызываем функцию
wrapHeaderText();

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  // проверяем кликнули именно на span или что-то другое
  if (e.target.tagName === 'SPAN') {
    // находим li в котором лежит этот конкретный span
    const li = e.target.closest('li');
    // ищем вложенный ul, внутри этого li
    const ul = li.querySelector('ul');

    // проверяем есть ли у списка этот заголовок
    // если нету, вернет null
    if (ul) {
      // переключаем видимость списка, если было скрыто - показываем и наоборот
      ul.hidden = !ul.hidden;
    }
  }
});
