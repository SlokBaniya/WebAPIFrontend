window.onload = function() {
   
    const username = localStorage.getItem('admin');
          fetch('http://localhost:8000/api/users/profile/'+username,{
         method:'GET'
        })
        .then(data => {
            return data.json()
        })
        .then(data => {
            const users = data;
            let details = '';
            console.log(users)
  
            details += `           
            
            <div class="log-body">
            <div class="form-group myr-top">
            
                <input type="text" class="form-control custom" placeholder="" value ="${data.fullname}" id="fullname" required="">
            </div>
            <div class="form-group myr-top">
        
                <input type="text" class="form-control custom" placeholder="Address" value ="${data.fullname}" id="address">
            </div>
            <div class="form-group myr-top">
        
                <input type="text" class="form-control custom" placeholder="Contact"  value ="${data.fullname}"id="contact">
            </div>
            <div class="form-group myr-top">
            
                <input type="text" class="form-control custom" placeholder="Username" value ="${data.fullname}" id="username">
            </div>
            

            <div class="log-btn text-center">
                <button class="btn btn-theme1" id="btnRegister">Update your profile</button>
                <!-- <a href="#" class="btn btn-theme1" >Register</a> -->
            </div>
            
            </div>
        
     
                 `;
  
           
  
            document.getElementById('detail').innerHTML = details;
        })
  
    .catch(error => {
        console.log(error)
    })

   

}


        