document.addEventListener('DOMContentLoaded', () => {
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const siteNav = document.getElementById('siteNav');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const enrollForm = document.getElementById('enrollForm');
  
  const loginBtn = document.getElementById('loginBtn');
  const demoBtn = document.getElementById('demoBtn');
  const enrollBtns = document.querySelectorAll('.enroll-btn');
  const cardActionBtns = document.querySelectorAll('.btn-card-action');

  // Мобильное меню
  menuToggleBtn.addEventListener('click', () => {
    siteNav.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('active');
    });
  });

  // Модальное окно
  const openModal = (title, desc) => {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = desc;
    modal.classList.add('active');
  };

  loginBtn.addEventListener('click', () => openModal('Вход', 'Введите данные для входа в кабинет.'));
  demoBtn.addEventListener('click', () => openModal('Демо-доступ', 'Заполните форму для получения доступа.'));

  enrollBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const title = e.target.closest('.course-card').querySelector('h3').textContent;
      openModal(`Запись: ${title}`, 'Введите контактные данные.');
    });
  });

  cardActionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const title = e.target.closest('.feature-card').querySelector('h3').textContent;
      alert(`Раздел "${title}": Подробное описание выслано на почту.`);
    });
  });

  modalClose.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  enrollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Заявка отправлена!');
    modal.classList.remove('active');
    enrollForm.reset();
  });
});