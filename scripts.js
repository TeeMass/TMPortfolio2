
function scrollToSection(id) {
    const section = document.getElementById(id);
    window.scrollTo({
        top: section.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
    });
}


function showProjectDetails(id) {
    document.getElementById(id).style.display = 'block';
}


function closeProjectDetails(id) {
    document.getElementById(id).style.display = 'none';
}


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. I will get back to you soon!');
    this.reset();
});
