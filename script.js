document.addEventListener('DOMContentLoaded', () => {
    console.log("UX engine (Brutalism Edition) active.");

    const heroTitle = document.querySelector('.hero-title');
    const projects = document.querySelectorAll('.project-brick');

    // 1. Efeito Parallax no Hero Title (UX Mouse Interaction)
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        heroTitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // 2. Scroll Reveal Animação (UX Scroll Feedback)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    projects.forEach(project => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(30px)';
        project.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        observer.observe(project);
    });
});
// No script.js
function sendMail() {
    const user = "contato";
    const domain = "Lucasryansilva50@gmail.com";
    window.location.href = `Lucas:${user}@${domain}`;
}