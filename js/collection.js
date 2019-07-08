window.onload = function() {
   

    fetch('http://localhost:8000/api/items/view', {
            headers: {
                "Authorization": localStorage.getItem('Token')
            }
        })
        .then(data => {
            return data.json()
        })
        .then(data => {
            const items = data;
            // const news = data.data;
            let details = '';

            const url = 'http://localhost:8000/uploads/';
            items.forEach(element => {
                

                details += ` 
                <div class="items col-3" style="float:left;">
                 <div class ="product-image">
                <img src="${url+element.image}" alt="" style="height:200px; width:100%; border-radius:10px;">
                </div>
                <div class ="product-name">
                <h2>${element.itemsname}</h2><h5>Rs. ${element.price}</h5>
                </div>
                <a href="viewItem.html?${element.id}" class="btn btn-primary" id="btnView" style="float:left;" > View More</a>                
                <a href="AddUserBooking.html?${element.id}" class="btn btn-success" id="btnBook" s"> Book Now</a>
                </div>                    
                     `;

            });
            document.getElementById('details').innerHTML = details;

        })


    .catch(error => {
        console.log(error)
    })

   


}