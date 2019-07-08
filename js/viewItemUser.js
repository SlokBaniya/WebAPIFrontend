window.onload = function() {
    const id = window.location.search.substring(1);
    

    fetch('http://localhost:8000/api/item/view/'+id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(data => {            
            return data.json()
        })
        .then(data => {
            const items = data;
            // const news = data.data;
            console.log(data);
            let details = '';          

            const url = 'http://localhost:8000/uploads/';
             
                details += ` 
                
                 <div class ="product-image">
                 
                <img src="${url+data.image}" alt="" style="height:400px; width:100%; border-radius:10px;">
                </div>
                <div class ="product-name">
               
                <h2> <label>Items name : </label> ${data.itemsname}</h2><h5> <label>Price : </label>  Rs. ${data.price}</h5>
                </div>
                <div class ="product-name">
                <h5>Item's Catagory: ${data.category}</h5>
                </div>
                <div class ="product-desc">
               <h5><label>Items Details : </label> ${data.desc}</h5>
                </div>
               
                <br/>
                               
                <a href="UserBooking.html?${data.price}" class="btn btn-success" id="btnBook" style="margin-left:100px;"> Book Now</a>
                  
                     `;

            
            document.getElementById('details').innerHTML = details;

        })


    .catch(error => {
        console.log(error)
    })

   


}