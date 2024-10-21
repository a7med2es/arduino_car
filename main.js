const backToTopButton = document.getElementById('back-to-top');

// وظيفة الانتقال إلى الأعلى عند الضغط على الزر
backToTopButton.addEventListener('click', () => {
    document.querySelector('body').scrollIntoView({
        behavior: 'smooth'
    });
});


