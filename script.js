document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send('porallachandu@gmail.com', 'your_template_id', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('status').innerText = 'Email sent successfully!';
        document.getElementById('status').style.color = 'green';
        document.getElementById('status').style.opacity = 1;
        setTimeout(() => {
            document.getElementById('status').style.opacity = 0;
        }, 3000);
    }, (error) => {
        console.error('FAILED...', error);
        document.getElementById('status').innerText = 'Error sending email. Please try again.';
        document.getElementById('status').style.color = 'red';
        document.getElementById('status').style.opacity = 1;
        setTimeout(() => {
            document.getElementById('status').style.opacity = 0;
        }, 3000);
    });
});
