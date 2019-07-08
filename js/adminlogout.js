const button2 = document.getElementById('btnAdminLogout');

button2.addEventListener('click', function() {      
    localStorage.removeItem('admin');
    localStorage.removeItem('AdminToken');
    
    alert("Logged Out!");
    window.location.href= "index.html";
 })