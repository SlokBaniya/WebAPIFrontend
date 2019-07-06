window.onload = function() {
       fetch('http://localhost:8000/api/admin/items', {
            headers: {
                "Authorization": localStorage.getItem('Token')
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
                <td><b>Product Name</b></td>
                <td><b>Category</b></td>
                <td><b>Price</b></td>
                <td><b>Description</b></td>
                <td><b>Image</b></td>
                <td><b>Created At</b></td>
                <td><b>Updated At</b></td>
                <td colspan="2" align="center"><b>Action</b></td>
               
             </tr>
            `
            const url = 'http://localhost:8000/api/item/upload';
            items.forEach(element => {
                details += ` 
                <tr>
                     <td>${element.itemsname}</td>
                    <td>${element.category}</td>
                    <td>${element.price}</td>
                    <td>${element.desc}</td>
                    <td><img src="${url+element.image}" height="50" width"60"></td>
                    <td>${element.created_at}</td>
                    <td>${element.updated_at}</td>
                    <td><a href="adminAddItems.html"><button class="btn btn-success" id="btnEdit" value="${element.id}">Edit</button></a></td>
                    <td><a href="" class="btn btn-danger" value="${element.id}">Remove</a></td>
                    
                    </tr>
                     `;

            });
            document.getElementById('detail').innerHTML = details;
            
            

        })

    .catch(error => {
        console.log(error)
    })


}