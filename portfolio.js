// Smooth scrolling effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive form submission for contact section
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Fetch form data
    const formData = new FormData(this);
    
    // Display submitted data (you can modify this part as needed)
    for (let [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
    }

    // You can add code here to send the form data to a server or perform other actions
    // For example, you can use fetch() to send the data to a backend API
    // fetch('http://example.com/api/contact', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     // Display success message or handle errors
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     // Display error message or handle errors
    // });
});
