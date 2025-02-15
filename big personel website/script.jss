
      
        function showPage(pageId) {
          
            document.getElementById('home-page').style.display = 'none';
            document.getElementById('cv-page').style.display = 'none';
            document.getElementById('me-page').style.display = 'none';
            
            
            document.getElementById(pageId).style.display = 'block';

           
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

     
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const darkModeButton = document.querySelector('.dark-mode-button i');
            

            if (document.body.classList.contains('dark-mode')) {
                darkModeButton.classList.remove('fa-moon');
                darkModeButton.classList.add('fa-sun');
            } else {
                darkModeButton.classList.remove('fa-sun');
                darkModeButton.classList.add('fa-moon');
            }

            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        }

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
                   
                }
            };

            const newLang = currentLang === 'tr' ? 'en' : 'tr';
            document.documentElement.lang = newLang;

   
            document.querySelector('header p').textContent = translations[newLang].welcome;
            document.querySelector('.about').textContent = translations[newLang].hello;
        
        }

        document.addEventListener('DOMContentLoaded', () => {
            const savedDarkMode = localStorage.getItem('darkMode');
            if (savedDarkMode === 'true') {
                document.body.classList.add('dark-mode');
                const darkModeButton = document.querySelector('.dark-mode-button i');
                darkModeButton.classList.remove('fa-moon');
                darkModeButton.classList.add('fa-sun');
            }
        });

      
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });





<!-- Google Translate Script -->
<script type="text/javascript">
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'tr',
            includedLanguages: 'tr,en,es,fr,de,it,ru,zh-CN,ja,pt',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    }
</script>

<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<script>
    // Sayfa Geçiş Fonksiyonu (Örnek)
    function showPage(pageId) {
        alert("Bu kısım henüz aktif değil: " + pageId);
    }
</script>

<!-- Custom Dil Seçici Butonu (Google Translate işlevi) -->
<script>
    // Google Translate butonunun gösterimi için özel CSS
    document.getElementById('google_translate_element').style.position = "fixed";
    document.getElementById('google_translate_element').style.top = "20px";
    document.getElementById('google_translate_element').style.right = "20px";
    document.getElementById('google_translate_element').style.backgroundColor = "#FFD700";
    document.getElementById('google_translate_element').style.padding = "10px 20px";
    document.getElementById('google_translate_element').style.borderRadius = "50px";
    document.getElementById('google_translate_element').style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
    document.getElementById('google_translate_element').style.cursor = "pointer";
    document.getElementById('google_translate_element').style.transition = "all 0.3s ease";
    document.getElementById('google_translate_element').style.zIndex = "9999";
    
    // Hover efekti
    document.getElementById('google_translate_element').onmouseover = function() {
        this.style.transform = "scale(1.1)";
        this.style.backgroundColor = "#1a2a6c";
        this.style.color = "#fff";
    }
    document.getElementById('google_translate_element').onmouseout = function() {
        this.style.transform = "scale(1)";
        this.style.backgroundColor = "#FFD700";
        this.style.color = "#1a2a6c";
    }
</script>



        });
     

    
