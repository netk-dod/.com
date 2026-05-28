// Плавная прокрутка
document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById(btn.getAttribute('data-scroll'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Вкладки
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Модальное окно
const modal = document.getElementById('modal');
const openModal = () => modal.classList.add('active');
const closeModal = () => modal.classList.remove('active');

document.getElementById('openFormBtn').addEventListener('click', openModal);
document.getElementById('footerWriteBtn').addEventListener('click', openModal);
document.getElementById('closeModalBtn').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

// === ОТПРАВКА ФОРМЫ (открывает почту с заполненными данными) ===
const form = document.getElementById('appForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const school = document.getElementById('school').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email) {
        alert('Заполните имя и email');
        return;
    }
    
    const subject = encodeURIComponent('Заявка на игру «Я – гражданин!»');
    const body = encodeURIComponent(
        `Имя: ${name}\nEmail: ${email}\nШкола: ${school || 'Не указана'}\nСообщение: ${message || 'Нет'}`
    );
    
    window.location.href = `mailto:atpk-itc@yandex.ru?subject=${subject}&body=${body}`;
    
    successMsg.style.display = 'block';
    form.reset();
    
    setTimeout(() => {
        closeModal();
        successMsg.style.display = 'none';
    }, 2000);
});