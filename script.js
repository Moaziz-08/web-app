document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('languageToggle');
    let currentLanguage = 'de';

    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'de' ? 'fr' : 'de';
        languageToggle.textContent = currentLanguage.toUpperCase();
        // Here you would implement the logic to change the language of the content
    });
});

