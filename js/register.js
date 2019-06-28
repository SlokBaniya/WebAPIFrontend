window.onload = function() {

    const button = document.getElementById('btnRegister');

    button.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const fullname = document.getElementById('fullname').value;
        const address = document.getElementById('address').value;
        const contact = document.getElementById('contact').value;
             console.log(username);
        


        // create a http request similar to postman

        fetch('http://localhost:8000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullname: fullname,
                    address: address,
                    contact: contact,
                    username: username,
                    password: password
                })
            })
            .then(data => {
                return data.json();
            })
            .then(json => {
                if (json.status === 'success') {
                    // localStorage.setItem('Token', json.accessToken);
                    // window.location.href = 'dashboard.html'
                    alert("Account created")
                } else {
                    alert('Unabble to create account');
                }
            })
            .catch(error => {
                console.log(error)
            })

    })

}