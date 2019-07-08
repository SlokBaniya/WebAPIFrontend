window.onload = function() {
   
    const id = window.location.search.substring(1);
    fetch('http://localhost:8000/api/item/view/' + id, {
            headers: {
                "Authorization": localStorage.getItem('AdminToken')
            }
        })
        .then(data => {
            return data.json();     
        })
        .then(data => {   
            
    let itemsname = `<input type="text" class="form-control custom" id="itemsname" value="${data.itemsname}" placeholder="${data.itemsname}" name="itemsname"/>`
    let price = `<input type="text" class="form-control custom" id="price" value="${data.price}" placeholder="Price" name="price"/>`
    let updated_at = `<input type="text" class="form-control custom" id="updated_at" value="${data.updated_at}" placeholder="Updated at" name="updated_at"/>`
    let desc = `<textarea class="form-control custom" rows="5" id="desc">${data.desc}</textarea>`
    let image = `<img src="${data.image}" style="width:350px">`
   
        
            

            document.getElementById('itemsnameValue').innerHTML = itemsname;
        
            document.getElementById('priceValue').innerHTML = price;
            document.getElementById('updated_atValue').innerHTML = updated_at;
            document.getElementById('descValue').innerHTML = desc;
                   })

    const edit = document.getElementById("btnEdit");
    edit.addEventListener('click', function() {
        const itemsname = document.getElementById('itemsname').value;
         const price = document.getElementById('price').value;
        const updated_at = document.getElementById('updated_at').value;
        const desc = document.getElementById('desc').value;

        if (itemsname == '') {
            alert("please enter Product name");
        } else if (price == '') {
            alert("please enter price");
        } else if (updated_at == '') {
            alert("please enter Updated date");
        } else if (desc == '') {
            alert("please enter description");
        } else {

            fetch('http://localhost:8000/api/item/edit/' + id, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    itemsname: itemsname,
                    price: price,
                    updated_at: updated_at,
                    desc: desc

                })
            })

            .then(data => {
                    return data.json();
                   
                })
                .then(json => {
                    if (json.success) {
                        alert("Items updated Successfully");
                    } else {
                        alert("Failed to update");
                    }

                })
                .catch(error => {
                    console.log(error)
                })

        }

    })


}