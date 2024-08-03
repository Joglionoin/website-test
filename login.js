function login_req() {
    const form = document.getElementById('login');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(form);
        const username = formData.get('name');
        const password = formData.get('pass');

        // Display form data
        if (username == "123" && password == "321") {
            window.location.href = "signup.html"
        }
        else {
            alert("Incorrect username or password")
        }
        

        // Optionally, do something with the data (e.g., send it to a server)
        // fetch('your-server-endpoint', {
        //     method: 'POST',
        //     body: formData
        // }).then(response => response.json())
        //   .then(data => console.log(data))
        //   .catch(error => console.error('Error:', error));
    });
}

document.addEventListener("load", login_req());