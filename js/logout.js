   const button1 = document.getElementById('btnUserLogout');   
button1.addEventListener('click', function() {
      
   localStorage.removeItem('username');
   localStorage.removeItem('UserToken');
   window.location.href= "index.html";
   alert("Logged Out!");
 
})
const button2 = document.getElementById('logoutlogin');   
button2.addEventListener('click', function() {
      
   localStorage.removeItem('username');
   localStorage.removeItem('UserToken');
   window.location.href= "index.html";
   alert("Logged Out!");
 
})

