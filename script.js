// Dark Mode Özelliği
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
};

// Sayfa Yüklendiğinde Kullanıcının Dark Mode Tercihini Kontrol Et
window.onload = () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
};

// Scroll ile Animasyon Ekleme
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// Sayfa Kaydırma Efekti
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Yazı Efekti (Typewriter)
const textArray = ["Geleceği İnşa Ediyoruz", "Modern Yapılar", "Güvenilir Projeler"];
let textIndex = 0;
let charIndex = 0;
const dynamicText = document.getElementById("dynamic-text");

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        dynamicText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            dynamicText.textContent = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % textArray.length;
            typeEffect();
        }, 2000);
    }
}


window.onload = () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
};
document.addEventListener("DOMContentLoaded", () => {
    // Hero section alanını Swiper.js ile başlatıyoruz
    const swiper = new Swiper(".hero-section", {
      loop: true,              // Sonsuz döngü
      effect: "fade",          // Slayt geçişi fade ile
      autoplay: {
        delay: 4000,           // 4 sn'de bir geçiş
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
  
      // Slayt değiştiğinde ilerleme çizgilerini güncelle
      on: {
        slideChange() {
          const currentIndex = this.realIndex; // 0, 1, 2 ...
          const lines = document.querySelectorAll(".slide-progress-lines .line");
  
          lines.forEach((line, idx) => {
            // Aktif slayta denk gelen çizgiyi sarı yap
            if (idx === currentIndex) {
              line.classList.add("line-active");
            } else {
              line.classList.remove("line-active");
            }
          });
        }
      }
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    function animateCounters() {
        const counters = document.querySelectorAll(".counter-number");
        counters.forEach(counter => {
            let target = +counter.getAttribute("data-count");
            let count = 0;
            let speed = target / 100; // Hız ayarı

            function updateCount() {
                if (count < target) {
                    count += speed;
                    counter.innerText = Math.floor(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            }

            updateCount();
        });
    }

    // Sayfa aşağı kaydırılınca animasyonu tetikle
    let section = document.querySelector(".counter-board-area");
    let options = { threshold: 0.5 };
    let observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateCounters();
            observer.disconnect();
        }
    }, options);
    
    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", function () {
    var filters = document.querySelectorAll(".filter-button");
    var projectItems = document.querySelectorAll(".project-item");

    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            let filterClass = this.getAttribute("data-filter");

            // Aktif filtreyi belirle
            filters.forEach(btn => btn.classList.remove("is-checked"));
            this.classList.add("is-checked");

            // Projeleri filtrele
            projectItems.forEach(item => {
                if (filterClass === "*" || item.classList.contains(filterClass.substring(1))) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
