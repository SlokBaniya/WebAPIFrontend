   const button1 = document.getElementById('btnUserLogout'); 
  
   
button1.addEventListener('click', function() {
      
   localStorage.removeItem('username');
   localStorage.removeItem('UserToken');
   window.location.href= "index.html";
   alert("Logged Out!");
 
})

