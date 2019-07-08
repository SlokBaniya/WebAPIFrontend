window.onload = function() {

    const button = document.getElementById('btnLogin');

    button.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // create a http request similar to postman

        fetch('http://localhost:8000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(data => {
                return data.json();
                
            })
            .then(json => {
                if (json.status) {  
                    
                    if(username == 'admin'){
                        localStorage.setItem('AdminToken', json.accessToken);
                    window.location.href = 'admindash.html';
                    localStorage.setItem('admin',username);
                }
                    else{
                        localStorage.setItem('UserToken', json.accessToken);
                        window.location.href = 'userdash.html';
                        localStorage.setItem('username',username);
                    }
                    alert("login success");
                } else {
                    alert('user not found');
                }
            })
            .catch(error => {
                console.log(error)
            })

    })

}