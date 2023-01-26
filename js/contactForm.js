(function() {
    emailjs.init('aaVVha3qkG4vTPL7y');
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('response').innerHTML = ''
        from_email = document.getElementById('from_email').value
        from_name = document.getElementById('from_name').value
        message = document.getElementById('message').value

        if (!from_email || !from_name || !message)
        {
            response = '<span lang="pl">Należy wypełnić każde pole!</span><span lang="en">Every field has to be filled!</span>'
            document.getElementById('response').innerHTML = response
        }
        else
        {
           emailjs.sendForm('portfolio_contact', 'portfolio_template', this)
            .then(function() {
                response = '<span lang="pl">Wiadomość została wysłana</span><span lang="en">Message has been sent</span>'
                document.getElementById('response').innerHTML = response
                document.getElementById("contact-form").reset();
                console.log('SUCCESS!');
            }, function(error) {
                response = '<span lang="pl">Wystąpił błąd</span><span lang="en">Error has occured</span>'
                document.getElementById('response').innerHTML = response
                document.getElementById("contact-form").reset();
                console.log('FAILED...', error);
            },); 
        }

        
    });
}