


document.getElementById('contactForm').addEventListener('submit', function() {
    const fields = this.querySelectorAll('input, textarea, select');
    let formData = '';
    fields.forEach(field => {
        formData += `${field.id}: ${field.value}\n`;
        formData +=`---------------------------------\n`;
    });
    const blob = new Blob([formData], { type: 'text/plain' });
    saveAs(blob, "form.txt");
});
