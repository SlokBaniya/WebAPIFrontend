window.onload = function() {
    fetch('http://localhost:8000/api/bookings/view', {
         headers: {
             "Authorization": localStorage.getItem('AdminToken')
         }
     })
     .then(data => {
         return data.json()
     })
     .then(data => {
         const items = data;
         
         let details = '';

         details += `
         <tr>
             <td><b>Booking ID</b></td>
             <td><b>Booking done by</b></td>
             <td><b>Items ID</b></td>
             
             <td  align="center"><b>Action</b></td>
            
          </tr>
         `
        
         items.forEach(element => {
             details += ` 
             <tr>
                  <td>${element.id}</td>
                 <td>${element.username}</td>
                 <td>${element.itemId}</td>
                 
                 
                 <td><a href="bookingDelete.html?${element.id}" class="btn btn-danger">Remove</a></td>
                 
                 </tr>
                  `;

         });
         document.getElementById('detail').innerHTML = details;
         
         

     })

 .catch(error => {
     console.log(error)
 })


}