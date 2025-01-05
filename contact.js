document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simulating an API call
        setTimeout(() => {
            // In a real application, you would send this data to your server
            console.log('Form data:', data);
            formMessage.textContent = 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.';
            contactForm.reset();
        }, 1000);
    });
});

