const students = [
    { name: "Luis A.", url: "https://luismid28.github.io", img: "estudiante.jpeg" },
    { name: "Jose A.", url: "https://kirito8899.github.io", img: "estudiante.jpeg" },
    { name: "Jonathan C. ", url: "https://sesenta-60.github.io", img: "estudiante.jpeg" },
    { name: "Est_4", url: "https://joshuotaXD.github.io", img: "estudiante.jpeg" },
    { name: "Est_5", url: "https://w3l33.github.io", img: "estudiante.jpeg" }
];

const container = document.getElementById('students-container');

students.forEach(student => {
    const card = document.createElement('div');
    card.className = 'student-card';

    const img = document.createElement('img');
    img.src = student.img;
    img.alt = student.name;
    img.className = 'student-photo';

    const btn = document.createElement('a');
    btn.href = student.url;
    btn.target = '_blank';
    btn.className = 'student-btn';
    btn.textContent = student.name;

    card.appendChild(img);
    card.appendChild(btn);

    container.appendChild(card);
});
