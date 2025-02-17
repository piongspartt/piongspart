function scrollToElement(elementSelector, instance = 0) {
    const element = document.querySelectorAll(elementSelector)
    if(element.length > instance){
        element[instance].scrollIntoView({behavior: 'smooth'});
    }    
}
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');

link1.addEventListener('click', () => {
    scrollToElement('.about-1');
})

link2.addEventListener('click', () => {
    scrollToElement('.portfolio');
})

link3.addEventListener('click', () => {
    scrollToElement('.services');
})

link4.addEventListener('click', () => {
    scrollToElement('.contact');
})


// Menambahkan kelas "page-loaded" setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");
});


// Fungsi untuk menambahkan kelas "visible" saat elemen terlihat di viewport
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll('.portfolio');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    scrollElements.forEach((el) => observer.observe(el));
});

// Fungsi untuk menambahkan kelas "visible" saat elemen terlihat di viewport
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll('.services');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    scrollElements.forEach((el) => observer.observe(el));
});

// Fungsi untuk menambahkan kelas "visible" saat elemen terlihat di viewport
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll('.contact-form');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    scrollElements.forEach((el) => observer.observe(el));
});

// Fungsi untuk menambahkan kelas "visible" saat elemen terlihat di viewport
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll('.about-1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    scrollElements.forEach((el) => observer.observe(el));
});

function readMore() {
    alert('This website under development');
}
