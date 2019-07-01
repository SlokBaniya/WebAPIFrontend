window.onload = function() {
   

    const button = document.getElementById('btnLogout'); 

    button.addEventListener('click', function() {


        localStorage.removeItem('username');
        localStorage.removeItem('Token');
        alert("Logged Out!");
        window.location.href= "index.html";


    } 
    )}
    