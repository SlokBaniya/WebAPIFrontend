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
            const url = 'http://localhost:8000/uploads/';
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
                    <td><a href="adminEditItems.html?${element.id}"><button class="btn btn-success">Edit</button></a></td>
                    <td><a href="itemsDelete.html?${element.id}" class="btn btn-danger">Remove</a></td>
                    
                    </tr>
                     `;

            });
            document.getElementById('detail').innerHTML = details;
            
            

        })

    .catch(error => {
        console.log(error)
    })


}