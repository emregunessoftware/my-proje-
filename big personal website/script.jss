<script>
        // Sayfa geçişleri için fonksiyon
        function showPage(pageId) {
            // Tüm sayfaları gizle
            document.getElementById('home-page').style.display = 'none';
            document.getElementById('cv-page').style.display = 'none';
            document.getElementById('me-page').style.display = 'none';
            
            // İstenen sayfayı göster
            document.getElementById(pageId).style.display = 'block';

            // Sayfa geçişinde yumuşak scroll
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Dark Mode için fonksiyon
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const darkModeButton = document.querySelector('.dark-mode-button i');
            
            // Dark mode ikonu değişimi
            if (document.body.classList.contains('dark-mode')) {
                darkModeButton.classList.remove('fa-moon');
                darkModeButton.classList.add('fa-sun');
            } else {
                darkModeButton.classList.remove('fa-sun');
                darkModeButton.classList.add('fa-moon');
            }

            // Dark mode tercihini localStorage'a kaydet
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        }

        // Dil değiştirme için fonksiyon
        function toggleLanguage() {
            const currentLang = document.documentElement.lang;
            const translations = {
                tr: {
                    welcome: "Hoş Geldiniz!",
                    hello: "Merhaba! Ben Muhammet TEMEL",
                    cv: "CV",
                    personal: "Kişisel Bilgiler",
                    // Diğer çeviriler buraya eklenebilir
                },
                en: {
                    welcome: "Welcome!",
                    hello: "Hello! I'm Muhammet TEMEL",
                    cv: "CV",
                    personal: "Personal Info",
                    // Diğer çeviriler buraya eklenebilir
                }
            };

            // Dil değişimi
            const newLang = currentLang === 'tr' ? 'en' : 'tr';
            document.documentElement.lang = newLang;

            // Metinleri güncelle
            document.querySelector('header p').textContent = translations[newLang].welcome;
            document.querySelector('.about').textContent = translations[newLang].hello;
            // Diğer metin güncellemeleri buraya eklenebilir
        }

        // Sayfa yüklendiğinde dark mode tercihini kontrol et
        document.addEventListener('DOMContentLoaded', () => {
            const savedDarkMode = localStorage.getItem('darkMode');
            if (savedDarkMode === 'true') {
                document.body.classList.add('dark-mode');
                const darkModeButton = document.querySelector('.dark-mode-button i');
                darkModeButton.classList.remove('fa-moon');
                darkModeButton.classList.add('fa-sun');
            }
        });

        // Sayfa geçişlerinde animasyon
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
        });
     

    </script>



