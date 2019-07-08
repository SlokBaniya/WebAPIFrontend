window.onload = function() {
    
    const btnAdd = document.getElementById('btnAdd');
    

    btnAdd.addEventListener('click', function() {
        const itemsname = document.getElementById('itemsname').value;
        const category = document.getElementById('category').value;
        const price = document.getElementById('price').value;
        const desc = document.getElementById('desc').value;
        const created_at = document.getElementById('created_at').value;
        let image = document.getElementById('image').files[0];
        if (itemsname == '') {
            alert("please enter Product name");
        } else if (category == '') {
            alert("please enter category");
        } else if (price == '') {
            alert("please enter price");
        } else if (image == null) {
            alert("please choose image");
        } else if (created_at == null) {
            alert("please please insert added date");
        } else {
            let h = new Headers();
            h.append('Accept', 'application/json');
            let fd = new FormData();
            fd.append('image', image, "some.jpg");

            // create a http request similar to postman
            fetch('http://localhost:8000/api/item/upload', {
                    method: 'POST',
                    headers: h,
                    // mode: 'no-cors',
                    body: fd
                })
                .then(data => {
                    return data.json();
                    
                })
                .then(json => {

                    fetch('http://localhost:8000/api/admin/items/add', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                itemsname: itemsname,
                                category: category,
                                price: price,
                                desc: desc,
                                created_at: created_at,
                                image: json.message
                            })
                        })
                        .then(data => {
                            return data.json();
                        })
                        .then(json => {
                            if (json.success) {
                                alert(json.message);
                            } else {
                                alert("Failed to add");
                            }
                        })
                })

            .catch(error => {
                button.innerText = 'Failed to add'
                console.log(error)
            })
        }

    })
   
}