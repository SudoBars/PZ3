document.getElementById('data-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки
  
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
  
    alert(`Ім'я: ${name}, Вік: ${age}`); // Виводимо введені дані у вигляді модального вікна
  });
  